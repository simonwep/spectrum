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

export class SpectrumRenderer {
    private audio?: AudioBuffer;

    constructor(
        private options: RenderSpectrumOptions,
        private file?: Blob
    ) {
    }

    /**
     * Renders an audio spectrum to a canvas.
     * @param file
     * @param opt
     */
    public async render(file: Blob | undefined = this.file, opt: RenderSpectrumOptions = this.options): Promise<HTMLCanvasElement> {
        if (!file && !this.file) {
            throw new Error(`Input missing`);
        }

        this.file = file;
        this.options = opt;

        if (this.file && !this.audio) {
            this.audio = await createAudioBuffer((file ?? this.file) as Blob, this.options.audioContextOptions);
        }


        // Find next higher number with the power of two to fit the screen height
        let fftSize = 2;
        while ((fftSize / 2) < this.options.height) {
            fftSize *= 2;
        }

        // Analyze file
        const audioBuffer = this.audio as AudioBuffer;
        const frames = await renderFrames({
            frames: this.options.width,
            buffer: audioBuffer,
            contextOptions: {
                numberOfChannels: audioBuffer.numberOfChannels,
                sampleRate: audioBuffer.sampleRate,
                length: audioBuffer.length
            },
            analyzerOptions: {
                fftSize,
                minDecibels: this.options.minDecibels ?? -120,
                maxDecibels: this.options.maxDecibels ?? -20
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
    }
}
