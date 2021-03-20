import {createAudioBuffer} from '@utils/createAudioBuffer';
import {renderFrames} from '@utils/renderFrames';

export interface RenderSpectrumOptions {
    width: number;
    height: number;
    minDecibels?: number;
    maxDecibels?: number;
    audioContextOptions?: AudioContextOptions;
}

/**
 * Renders an audio spectrum to a canvas.
 * @param file
 * @param opt
 */
export const renderSpectrum = async (file: Blob, opt: RenderSpectrumOptions): Promise<HTMLCanvasElement> => {
    let fftSize = 2;

    // Find next higher number with the power of two to fit the screen height
    while ((fftSize / 2) < opt.height) {
        fftSize *= 2;
    }

    // Analyze file
    const audioBuffer = await createAudioBuffer(file, opt.audioContextOptions);
    const frames = await renderFrames({
        frames: opt.width,
        buffer: audioBuffer,
        contextOptions: {
            numberOfChannels: audioBuffer.numberOfChannels,
            sampleRate: audioBuffer.sampleRate,
            length: audioBuffer.length
        },
        analyzerOptions: {
            fftSize,
            minDecibels: opt.minDecibels ?? -120,
            maxDecibels: opt.maxDecibels ?? -20
        }
    });

    // Render spectrum
    const width = frames.length;
    const height = fftSize / 2;
    const imageData = new ImageData(width, height);
    for (let i = 0; i < frames.length; i++) {
        const frame = frames[i];

        for (let j = 0; j < frame.length; j++) {
            const loudness = frame[j] / 255;
            const pixelOffset = (i + (frame.length - j) * width) * 4;
            imageData.data[pixelOffset] = 255;
            imageData.data[pixelOffset + 1] = 255;
            imageData.data[pixelOffset + 2] = 255;
            imageData.data[pixelOffset + 3] = loudness * 255;
        }
    }

    // Put on canvas
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    (canvas.getContext('2d') as CanvasRenderingContext2D)
        .putImageData(imageData, 0, 0);

    return canvas;
};
