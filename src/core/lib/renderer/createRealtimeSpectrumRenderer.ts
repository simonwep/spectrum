import { detectSampleRate } from '@utils/detectSampleRate';
import { constants } from '@constants';
import {
  CancelNextFrameLoop,
  createCanvas,
  createEventBus,
  eachFrame,
  nextNumberPowerOf2,
} from '../utils';

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
  sampleRate: number;
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

const name = 'RealtimeSpectrumRenderer';

export const createRealtimeSpectrumRenderer = (
  colors: Uint8ClampedArray[],
  background: Uint8ClampedArray
) => {
  const [canvas, context] = createCanvas();
  const { on, off, emit } = createEventBus<RealtimeSpectrumRendererEvents>();

  let recording = false;
  let audioContext: AudioContext | undefined;
  let audioAnalyzer: AnalyserNode | undefined;
  let stopRendering: CancelNextFrameLoop | undefined;
  let sampleRate: number = constants.RENDERER_BASE_SAMPLE_RATE;
  let lastSampleRate = sampleRate;

  // Rendering state
  let offset = -1;
  let bufferSize = 0;
  const time: TimeFrame = { start: 0, end: 0 };
  const frames: Frame[] = [];

  const update = () => {
    if (audioContext && audioAnalyzer) {
      emit('update', {
        canvas,
        time,
        audioContext,
        sampleRate,
        audioAnalyzer,
        bufferSize,
      });
    }
  };

  const reRenderSpectrum = () => {
    if (!frames.length) {
      return;
    }

    const { width, height } = canvas;
    const view = frames.slice(-width);
    const spectrum = new ImageData(view.length, height);
    for (let i = 0; i < spectrum.data.length; i += 4) {
      const row = height - Math.floor(i / 4 / spectrum.width);
      const col = (i / 4) % spectrum.width;

      const frame = view[col];
      const index = Math.floor(
        row * (sampleRate / constants.RENDERER_BASE_SAMPLE_RATE)
      );
      const loudness = frame.buffer[index];

      spectrum.data.set(loudness ? colors[loudness] : background, i);
    }

    offset = Math.min(view.length - 1);
    context.putImageData(spectrum, 0, 0);
  };

  const resize = (width: number, height: number) => {
    canvas.width = width;
    canvas.height = height;
    reRenderSpectrum();
    update();
  };

  const destroy = async () => {
    await stop();
    await audioContext?.close();
    audioAnalyzer = undefined;
    audioContext = undefined;
    recording = false;
    emit('destroy');
  };

  const stop = async () => {
    recording = false;
    stopRendering?.();
    emit('stop');
  };

  const start = async () => {
    if (recording) return;
    const start = performance.now();
    recording = true;

    // Get user media and create media recorder
    const media = await navigator.mediaDevices.getUserMedia({
      audio: { deviceId: 'default' },
    });

    // Create context and analyzer node
    await audioContext?.close();
    audioContext = new AudioContext({
      sampleRate: constants.RENDERER_BASE_SAMPLE_RATE,
    });

    // Connect analyzer node
    const analyzer = (audioAnalyzer = audioContext.createAnalyser());
    analyzer.smoothingTimeConstant = 0;
    analyzer.minDecibels = constants.RENDERER_MIN_DECIBELS;
    analyzer.maxDecibels = constants.RENDERER_MAX_DECIBELS;

    // Connect input node
    const audioSource = audioContext.createMediaStreamSource(media);
    audioSource.connect(audioAnalyzer);

    stopRendering = eachFrame(() => {
      const { height, width } = canvas;

      analyzer.fftSize = nextNumberPowerOf2(height);

      const buffer = new Uint8Array(analyzer.frequencyBinCount);
      const spectrum = new ImageData(1, height);
      const at = Math.ceil(performance.now() - start);

      analyzer.getByteFrequencyData(buffer);

      sampleRate = Math.max(
        detectSampleRate(
          [buffer],
          constants.RENDERER_BASE_SAMPLE_RATE,
          constants.RENDERER_MIN_VISIBLE_LOUDNESS
        ),
        frames.length ? sampleRate : 0
      );

      if (sampleRate !== lastSampleRate) {
        reRenderSpectrum();
        lastSampleRate = sampleRate;
      }

      for (let y = 0; y < height; y++) {
        const index = Math.floor(
          y * (sampleRate / constants.RENDERER_BASE_SAMPLE_RATE)
        );

        const loudness = buffer[index];
        const offset = (height - y - 1) * 4;

        spectrum.data.set(loudness ? colors[loudness] : background, offset);
      }

      const averageTimePerFrame = frames.length
        ? (frames.at(-1)?.at ?? 0) / 1000 / frames.length
        : 0;

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
    on,
    off,
    name,
    sampleRate,
    resize,
    start,
    stop,
    destroy,
    isRecording: () => recording,
  };
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const isRealtimeSpectrumRenderer = (
  v: any
): v is RealtimeSpectrumRenderer => typeof v === 'object' && v?.name === name;

export type RealtimeSpectrumRenderer = ReturnType<
  typeof createRealtimeSpectrumRenderer
>;
