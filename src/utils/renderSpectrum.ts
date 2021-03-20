import {createAudioBuffer} from '@utils/createAudioBuffer';
import {hslToRgb} from '@utils/hslToRgb';
import {renderFrames} from '@utils/renderFrames';

export interface RenderSpectrumOptions {
    width: number;
    height: number;
    minDecibels?: number;
    maxDecibels?: number;
    audioContextOptions?: AudioContextOptions;
}

// Pre-calculate colors to copy into the bitmap
const HUE_SILENCING = 270;
const HUE_MAX = 300;
const colors: Uint8ClampedArray[] = new Array(256);
for (let i = 0; i <= 255; i++) {
    const color = colors[255 - i] = new Uint8ClampedArray(4);
    const hue = (i / 255) * HUE_MAX;

    // Towards the end it should just get dark
    const lightness = hue > HUE_SILENCING ?
        0.5 - 0.5 * ((300 - hue) / (HUE_MAX - HUE_SILENCING))
        : 0.5;

    color.set(hslToRgb(hue / 360, 1, lightness), 0);
    color[3] = 255;
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
    const height = frames[0].length;
    const imageData = new ImageData(width, height);

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
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    (canvas.getContext('2d') as CanvasRenderingContext2D)
        .putImageData(imageData, 0, 0);

    return canvas;
};
