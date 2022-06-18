import { createAudioBuffer, createCanvas, createEventBus } from '../utils';

export interface AudioFileSpectrumRendererUpdate {
  canvas: HTMLCanvasElement;
  audioContext: OfflineAudioContext;
  audioAnalyzer: AnalyserNode;
  audioBuffer: AudioBuffer;
  audioFile: File;
  audio: HTMLAudioElement | undefined;
}

export interface AudioFileSpectrumRendererEvents {
  beforePlay: void;
  play: void;
  pause: void;
  start: void;
  stop: void;
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

  let rendering = false;
  let playing = false;
  let audioContext: OfflineAudioContext | undefined;
  let audioAnalyzer: AnalyserNode | undefined;
  let audioBuffer: AudioBuffer | undefined;
  let audioFile: File | undefined;
  let audioFileUrl: string | undefined;
  let imageData: ImageData | undefined;
  let audio: HTMLAudioElement | undefined;

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
        audio,
      });
    }
  };

  const render = async (file = audioFile) => {
    if (rendering || !file) return;
    audioFileUrl && URL.revokeObjectURL(audioFileUrl);
    audio?.pause();
    emit('pause');
    emit('start');

    audio = undefined;
    audioFileUrl = undefined;

    playing = false;
    rendering = true;

    audioFile = file;
    audioBuffer = await createAudioBuffer(file, {
      sampleRate: FREQUENCY_RANGE,
    });

    const { width, height } = canvas;
    const frames: Uint8Array[] = new Array(width);
    audioContext = new OfflineAudioContext(audioBuffer);

    // Create analyzer node
    audioAnalyzer = audioContext.createAnalyser();
    audioAnalyzer.connect(audioContext.destination);
    audioAnalyzer.fftSize = calculateFftSize(height);
    audioAnalyzer.smoothingTimeConstant = 0;
    audioAnalyzer.minDecibels = -120;
    audioAnalyzer.maxDecibels = -20;

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
    rendering = false;
    emit('stop');
    update();
  };

  const play = async () => {
    if (rendering || !audioFile || !imageData || playing) {
      return;
    }

    audioFileUrl = audioFileUrl ?? URL.createObjectURL(audioFile);
    audio = audio ?? new Audio(audioFileUrl);
    emit('beforePlay');

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
    playing = true;
    emit('play');
  };

  const pause = () => {
    audio?.pause();
    playing = false;
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
    pause();
    rendering = false;
    emit('destroy');
  };

  const resize = (width: number, height: number) => {
    canvas.width = width;
    canvas.height = height;
    void render();
  };

  return {
    on,
    off,
    name,
    resize,
    render,
    destroy,
    play,
    pause,
    rewind,
    setVolume,
    isPlaying: () => playing,
    isRendering: () => rendering,
  };
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const isAudioFileSpectrumRenderer = (
  v: any
): v is AudioFileSpectrumRenderer => typeof v === 'object' && v?.name === name;

export type AudioFileSpectrumRenderer = ReturnType<
  typeof createAudioFileSpectrumRenderer
>;
