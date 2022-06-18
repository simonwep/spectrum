import { CancelNextFrameLoop, createCanvas, createEventBus, eachFrame } from '../utils';

export interface TimeFrame {
  start: number;
  end: number;
}

export interface RealtimeSpectrumRendererUpdate {
  canvas: HTMLCanvasElement;
  time: TimeFrame;
  audioContext: AudioContext;
  audioAnalyzer: AnalyserNode;
  bufferSize: number;
}

export interface RealtimeSpectrumRendererEvents {
  start: void;
  stop: void;
  destroy: void;
  update: RealtimeSpectrumRendererUpdate;
}

interface Frame {
  buffer: Uint8Array;
  at: number;
}

const FREQUENCY_RANGE = 96_000;
const name = 'RealtimeSpectrumRenderer';

export const createRealtimeSpectrumRenderer = (colors: Uint8ClampedArray[], background: Uint8ClampedArray) => {
  const [canvas, context] = createCanvas();
  const { on, off, emit } = createEventBus<RealtimeSpectrumRendererEvents>();

  const state = { rendering: false };
  let audioContext: AudioContext | undefined;
  let audioAnalyzer: AnalyserNode | undefined;
  let stopRendering: CancelNextFrameLoop | undefined;

  const analyzerOptions: Required<
    Pick<AnalyserOptions, 'smoothingTimeConstant' | 'fftSize' | 'minDecibels' | 'maxDecibels'>
  > = {
    smoothingTimeConstant: 0,
    fftSize: 2 ** 12,
    minDecibels: -120,
    maxDecibels: -20,
  };

  // Rendering state
  let offset = -1;
  let bufferSize = 0;
  const time: TimeFrame = { start: 0, end: 0 };
  const frames: Frame[] = [];

  const update = () => {
    if (audioContext && audioAnalyzer) {
      emit('update', { canvas, time, audioContext, audioAnalyzer, bufferSize });
    }
  };

  const resize = (width: number, height: number) => {
    canvas.width = width;
    canvas.height = height;

    if (!frames.length) {
      return;
    }

    const view = frames.slice(-width);
    const spectrum = new ImageData(view.length, height);

    for (let i = 0; i < spectrum.data.length; i += 4) {
      const row = height - Math.floor(i / 4 / spectrum.width);
      const col = (i / 4) % spectrum.width;
      const frame = view[col];
      const slice = frame.buffer.length / spectrum.height;
      const loudness = frame.buffer[Math.floor(row * slice)];

      if (loudness) {
        const color = colors[loudness];
        spectrum.data.set(color, i);
      } else {
        spectrum.data.set(background, i);
      }
    }

    offset = Math.min(view.length - 1);
    context.putImageData(spectrum, 0, 0);
    update();
  };

  const destroy = async () => {
    await stop();
    await audioContext?.close();
    audioAnalyzer = undefined;
    audioContext = undefined;
    emit('destroy');
  };

  const stop = async () => {
    state.rendering = false;
    stopRendering?.();
    emit('stop');
  };

  const start = async () => {
    if (state.rendering) return;
    const start = performance.now();
    state.rendering = true;

    // Get user media and create media recorder
    const media = await navigator.mediaDevices.getUserMedia({
      audio: { deviceId: 'default' },
    });

    // Create context and analyzer node
    audioContext?.close();
    audioContext = new AudioContext({
      sampleRate: FREQUENCY_RANGE,
    });

    // Connect analyzer node
    const analyzer = (audioAnalyzer = audioContext.createAnalyser());

    // Connect input node
    const audioSource = audioContext.createMediaStreamSource(media);
    audioSource.connect(audioAnalyzer);

    stopRendering = eachFrame(() => {
      const { height, width } = canvas;

      const buffer = new Uint8Array(analyzer.frequencyBinCount);
      const spectrum = new ImageData(1, height);
      const slice = buffer.length / height;
      const at = Math.ceil(performance.now() - start);

      Object.assign(analyzer, analyzerOptions);
      analyzer.getByteFrequencyData(buffer);

      for (let y = 0; y < height; y++) {
        const loudness = buffer[Math.floor(y * slice)];
        const offset = (height - y - 1) * 4;

        if (loudness) {
          const color = colors[loudness];
          spectrum.data.set(color, offset);
        } else {
          spectrum.data.set(background, offset);
        }
      }

      const averageTimePerFrame = frames.length ? (frames.at(-1)?.at ?? 0) / 1000 / frames.length : 0;

      if (offset === width - 1) {
        context.globalCompositeOperation = 'copy';
        context.drawImage(canvas, -1, 0);
        context.putImageData(spectrum, offset, 0);
        context.globalCompositeOperation = 'source-over';
        time.end = averageTimePerFrame * frames.length;
        time.start = averageTimePerFrame * (frames.length - width);
      } else {
        context.putImageData(spectrum, ++offset, 0);
        time.end = averageTimePerFrame * width;
      }

      frames.push({ buffer, at });
      bufferSize += buffer.length;
      update();
    });

    emit('start');
  };

  return {
    state,
    on,
    off,
    name,
    analyzerOptions,
    resize,
    start,
    stop,
    destroy,
  };
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const isRealtimeSpectrumRenderer = (v: any): v is RealtimeSpectrumRenderer =>
  typeof v === 'object' && v?.name === name;

export type RealtimeSpectrumRenderer = ReturnType<typeof createRealtimeSpectrumRenderer>;
