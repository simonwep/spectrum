import { detectSampleRate } from '@utils/detectSampleRate';
import { createAudioBuffer, createCanvas, createEventBus } from '../utils';

export interface AudioFileSpectrumRendererUpdate {
  canvas: HTMLCanvasElement;
  audioContext: OfflineAudioContext;
  audioAnalyzer: AnalyserNode;
  audioBuffer: AudioBuffer;
  audioFile: File;
  audio: HTMLAudioElement | undefined;
  sampleRate: number;
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

const DECODE_SAMPLE_RATE = 192_000; // Sampling rate
const MIN_LOUDNESS = 14; // Range between 0 and 255

const name = 'AudioFileSpectrumRenderer';

const calculateFftSize = (height: number) => {
  let fftSize = 2;
  while (fftSize / 2 <= height) fftSize *= 2;
  return fftSize;
};

export const createAudioFileSpectrumRenderer = (
  colors: Uint8ClampedArray[]
) => {
  const [canvas, context] = createCanvas();
  const { on, off, emit } = createEventBus<AudioFileSpectrumRendererEvents>();

  let rendering = false;
  let playing = false;
  let sampleRate = DECODE_SAMPLE_RATE;
  let audioContext: OfflineAudioContext | undefined;
  let audioAnalyzer: AnalyserNode | undefined;
  let audioBuffer: AudioBuffer | undefined;
  let audioFile: File | undefined;
  let audioFileUrl: string | undefined;
  let imageData: ImageData | undefined;
  let audio: HTMLAudioElement | undefined;

  const update = () => {
    if (audioFile && audioContext && audioAnalyzer && audioBuffer) {
      emit('update', {
        canvas,
        audioFile,
        audioContext,
        audioAnalyzer,
        audioBuffer,
        audio,
        sampleRate,
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
      sampleRate: DECODE_SAMPLE_RATE,
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

    /**
     * It is currently not possible to detect the sample-rate of an audio file.
     * So instead we use the currently highest sample-rate available in all major browsers,
     * and sample it down manually afterwards to only show the meaningful fraction of the audio-file.
     */
    sampleRate = detectSampleRate(frames, DECODE_SAMPLE_RATE, MIN_LOUDNESS);

    // Render spectrum;
    imageData = new ImageData(width, height);
    for (let x = 0; x < width; x++) {
      const frame = frames[x];

      for (let y = 0; y < height; y++) {
        const index = Math.floor(y * (sampleRate / DECODE_SAMPLE_RATE));
        const loudness = frame[index];

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
    sampleRate,
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
