import {SPECTRUM_UI_COLORS} from '../constants';
import {createCanvas, createCanvasResizeObserver, createAudioBuffer} from './utils';

export interface AudioFileSpectrumRendererUpdate {
    canvas: HTMLCanvasElement;
    audioContext: OfflineAudioContext;
    audioAnalyzer: AnalyserNode;
    audioBuffer: AudioBuffer;
    audioFile: File;
}

const name = 'AudioFileSpectrumRenderer';

export const createAudioFileSpectrumRenderer = (
  onUpdate: (update: AudioFileSpectrumRendererUpdate) => void
) => {
    const [canvas, context] = createCanvas();

    let rendering = false;
    let audioContext: OfflineAudioContext | undefined;
    let audioAnalyzer: AnalyserNode | undefined;
    let audioBuffer: AudioBuffer | undefined;
    let audioFile: File | undefined;

    const analyzerOptions: Required<Pick<AnalyserOptions, 'smoothingTimeConstant' | 'minDecibels' | 'maxDecibels'>> = {
        smoothingTimeConstant: 0,
        minDecibels: -120,
        maxDecibels: -20
    };

    const calculateFftSize = (height: number) => {
        let fftSize = 2;
        while ((fftSize / 2) < height) fftSize *= 2;
        return fftSize;
    };

    const update = () => {
        if (audioFile && audioContext && audioAnalyzer && audioBuffer) {
            onUpdate({canvas, audioFile, audioContext, audioAnalyzer, audioBuffer});
        }
    };

    const render = async (file = audioFile) => {
        if (rendering || !file) return;
        rendering = true;
        audioFile = file;
        audioBuffer = await createAudioBuffer(file);

        const {width, height} = canvas;
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
                audioAnalyzer?.getByteFrequencyData(frames[i] = new Uint8Array(bufferSize));
            });
        }

        const src = audioContext.createBufferSource();
        src.buffer = audioBuffer;
        src.connect(audioAnalyzer);
        src.start();

        await audioContext.startRendering();

        // Render spectrum
        const imageData = new ImageData(width, height);
        for (let x = 0; x < width; x++) {
            const frame = frames[x];

            for (let y = 0; y < height; y++) {
                const loudness = frame[y];

                if (loudness) {
                    const pixelOffset = (x + (height - y - 1) * width) * 4;
                    const color = SPECTRUM_UI_COLORS[loudness];
                    imageData.data.set(color, pixelOffset);
                }
            }
        }

        // Put on canvas
        context.putImageData(imageData, 0, 0);
        rendering = false;
        update();
    };

    const destroy = createCanvasResizeObserver(canvas, () => {
        rendering = false;
        void render();
    });

    const resize = (width: number, height: number) => {
        canvas.width = width;
        canvas.height = height;
    };

    return {name, analyzerOptions, resize, render, destroy};
};

export type AudioFileSpectrumRenderer = ReturnType<typeof createAudioFileSpectrumRenderer>;
