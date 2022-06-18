import { createAudioBuffer, createCanvas, createEventBus } from '../utils';

export interface AudioFileSpectrumRendererUpdate {
  canvas: HTMLCanvasElement;
  audioContext: OfflineAudioContext;
  audioAnalyzer: AnalyserNode;
  audioBuffer: AudioBuffer;
  audioFile: File;
}

export interface AudioFileSpectrumRendererEvents {
  play: void;
  pause: void;
  destroy: void;
  update: AudioFileSpectrumRendererUpdate;
}

const FREQUENCY_RANGE = 96_000;
const name = 'AudioFileSpectrumRenderer';

export const createAudioFileSpectrumRenderer = (
  colors: Uint8ClampedArray[]
) => {
  const [canvas, context] = createCanvas();
  const { on, off, emit } = createEventBus<AudioFileSpectrumRendererEvents>();

  const state = { rendering: false, playing: false };
  let audioContext: OfflineAudioContext | undefined;
  let audioAnalyzer: AnalyserNode | undefined;
  let audioBuffer: AudioBuffer | undefined;
  let audioFile: File | undefined;
  let audioFileUrl: string | undefined;
  let imageData: ImageData | undefined;
  let audio: HTMLAudioElement | undefined;
  let schedulePlaying = false;

  const analyzerOptions: Required<
    Pick<
      AnalyserOptions,
      'smoothingTimeConstant' | 'minDecibels' | 'maxDecibels'
    >
  > = {
    smoothingTimeConstant: 0,
    minDecibels: -120,
    maxDecibels: -20,
  };

  const calculateFftSize = (height: number) => {
    let fftSize = 2;
    while (fftSize / 2 < height) fftSize *= 2;
    return fftSize;
  };

  const update = () => {
    if (audioFile && audioContext && audioAnalyzer && audioBuffer) {
      emit('update', {
        canvas,
        audioFile,
        audioContext,
        audioAnalyzer,
        audioBuffer,
      });
    }
  };

  const render = async (file = audioFile) => {
    if (state.rendering || !file) return;

    audioFileUrl && URL.revokeObjectURL(audioFileUrl);
    audio?.pause();
    emit('pause');

    audio = undefined;
    audioFileUrl = undefined;

    state.playing = false;
    state.rendering = true;

    audioFile = file;
    audioBuffer = await createAudioBuffer(file, {
      sampleRate: FREQUENCY_RANGE,
    });

    const { width, height } = canvas;
    const frames: Uint8Array[] = new Array(width);
    audioContext = new OfflineAudioContext(audioBuffer);

    // Create analyzer node
    audioAnalyzer = audioContext.createAnalyser();
    audioAnalyzer.fftSize = calculateFftSize(height);
    audioAnalyzer.smoothingTimeConstant = 0;
    audioAnalyzer.connect(audioContext.destination);
    Object.assign(audioAnalyzer, analyzerOptions);

    // Render all frames
    const frameSize = audioBuffer.duration / frames.length;
    const bufferSize = audioAnalyzer.frequencyBinCount;

    for (let i = 0; i < frames.length; i++) {
      const frame = i * frameSize;
      audioContext.suspend(frame).then(() => {
        audioContext?.resume();
        audioAnalyzer?.getByteFrequencyData(
          (frames[i] = new Uint8Array(bufferSize))
        );
      });
    }

    const src = audioContext.createBufferSource();
    src.buffer = audioBuffer;
    src.connect(audioAnalyzer);
    src.start();

    await audioContext.startRendering();

    // Render spectrum
    imageData = new ImageData(width, height);
    for (let x = 0; x < width; x++) {
      const frame = frames[x];

      for (let y = 0; y < height; y++) {
        const loudness = frame[y];

        if (loudness) {
          const pixelOffset = (x + (height - y - 1) * width) * 4;
          const color = colors[loudness];
          imageData.data.set(color, pixelOffset);
        }
      }
    }

    // Put on canvas
    context.putImageData(imageData, 0, 0);
    state.rendering = false;
    update();

    if (schedulePlaying) {
      await play();
    }
  };

  const play = async () => {
    if (state.rendering) {
      schedulePlaying = true;
      return;
    } else if (!audioFile || !imageData || state.playing) {
      return;
    }

    audioFileUrl = audioFileUrl ?? URL.createObjectURL(audioFile);
    audio = audio ?? new Audio(audioFileUrl);
    audio.volume = 0;

    audio.addEventListener('timeupdate', () => {
      if (!imageData || !audio) return;
      context.putImageData(imageData, 0, 0);

      const x = Math.floor((audio.currentTime / audio.duration) * canvas.width);
      if (x) {
        context.fillStyle = 'white';
        context.fillRect(x, 0, 1, canvas.height);
      }

      update();
    });

    await audio.play();
    state.playing = true;
    schedulePlaying = false;
    emit('play');
  };

  const pause = () => {
    audio?.pause();
    state.playing = false;
    schedulePlaying = false;
    audioFileUrl && URL.revokeObjectURL(audioFileUrl);
    emit('pause');
  };

  const rewind = () => {
    audio && (audio.currentTime = 0);
  };

  const setVolume = (volume: number) => {
    audio && (audio.volume = volume);
  };

  const destroy = () => {
    state.rendering = false;
    emit('destroy');
  };

  const resize = (width: number, height: number) => {
    canvas.width = width;
    canvas.height = height;
    void render();
  };

  return {
    state,
    on,
    off,
    name,
    analyzerOptions,
    resize,
    render,
    destroy,
    play,
    pause,
    rewind,
    setVolume,
  };
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const isAudioFileSpectrumRenderer = (
  v: any
): v is AudioFileSpectrumRenderer => typeof v === 'object' && v?.name === name;

export type AudioFileSpectrumRenderer = ReturnType<
  typeof createAudioFileSpectrumRenderer
>;
