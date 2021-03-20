import {autoSizeCanvas} from '@utils/autoSizeCanvas';
import {createAudioBuffer} from '@utils/createAudioBuffer';
import {on} from '@utils/events';
import './styles/_index.scss';

const MIN_DECIBEL = -120;
const MAX_DECIBEL = -20;
const SAMPLE_RATE = 44100;
const FFT_SIZE = 8192;

const percentageClamp = (v: number, min: number, max: number): number => {
    return v < min ? 1 : v > max ? 1 : (max - v) / (max - min);
};

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
autoSizeCanvas(canvas);

const render = async (file: Blob) => {
    const audioBuffer = await createAudioBuffer(file, {
        sampleRate: SAMPLE_RATE
    });

    const oa = new OfflineAudioContext({
        numberOfChannels: audioBuffer.numberOfChannels,
        sampleRate: audioBuffer.sampleRate,
        length: audioBuffer.length
    });

    // Create analyzer node
    const analyzer = oa.createAnalyser();
    analyzer.fftSize = FFT_SIZE;
    analyzer.minDecibels = MIN_DECIBEL;
    analyzer.maxDecibels = MAX_DECIBEL;
    analyzer.smoothingTimeConstant = 0;
    analyzer.connect(oa.destination);

    // Render all frames
    const totalFrames = screen.availWidth;
    const frameSize = audioBuffer.duration / totalFrames;
    const bufferSize = analyzer.frequencyBinCount;
    const frames: Float32Array[] = new Array(totalFrames);

    for (let i = 0; i < totalFrames; i++) {
        const frame = i * frameSize;
        oa.suspend(frame).then(() => {
            const buffer = frames[i] = new Float32Array(bufferSize);
            analyzer.getFloatFrequencyData(buffer);
            oa.resume();
        });
    }

    const src = oa.createBufferSource();
    src.buffer = audioBuffer;
    src.connect(analyzer);
    src.start();

    console.log('Rendering...');
    await oa.startRendering();

    console.log('Generate colors...');
    const width = totalFrames;
    const height = bufferSize;
    const imageData = new ImageData(width, height);
    for (let i = 0; i < frames.length; i++) {
        const frame = frames[i];

        for (let j = 0; j < frame.length; j++) {
            const loudness = percentageClamp(frame[j], MIN_DECIBEL, MAX_DECIBEL);
            const pixelOffset = (i + (frame.length - j) * width) * 4;
            imageData.data[pixelOffset] = 255;
            imageData.data[pixelOffset + 1] = 255;
            imageData.data[pixelOffset + 2] = 255;
            imageData.data[pixelOffset + 3] = loudness * 255;
        }
    }

    console.log('Painting');
    const tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = width;
    tmpCanvas.height = height;

    (tmpCanvas.getContext('2d') as CanvasRenderingContext2D)
        .putImageData(imageData, 0, 0);

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.drawImage(tmpCanvas, 0, 0, canvas.width, canvas.height);
    ctx.translate(0.5, 0.5);
    console.log('done');
};

on('#app', ['dragover', 'drop'], (evt: DragEvent) => {
    evt.preventDefault();

    if (evt.type === 'drop') {
        const file = evt.dataTransfer?.files?.[0];
        file && render(file);
    }
});
