import {hslToRgb} from '@utils/hslToRgb';
import {createAudioBuffer} from './createAudioBuffer';
import {renderFrames} from './renderFrames';

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
        0.5 * ((300 - hue) / (HUE_MAX - HUE_SILENCING))
        : 0.5;

    color.set(hslToRgb(hue / 360, 1, lightness), 0);
    color[3] = 255;
}

export class SpectrumRenderer {
    public static readonly COLORS = colors;

    public isRendering = false;
    public canvas?: HTMLCanvasElement;
    public audio?: AudioBuffer;

    constructor(
        public file: File,
        public options?: RenderSpectrumOptions
    ) {
    }

    /**
     * Returns the previously rendered spectrum.
     */
    public getSpectrum(): HTMLCanvasElement | null {
        return this.canvas ?? null;
    }

    public getBitrate(): number | null {
        if (this.audio) {
            const {duration, length} = this.audio;
            return (length / duration) * 8; // 32 bit audio
        }

        return null;
    }

    /**
     * Renders an audio spectrum to a canvas.
     * If the previously rendered spectrum is smaller it'll be down-scaled.
     * @param opt
     */
    public async startRender(opt?: RenderSpectrumOptions): Promise<void> {

        // Rendering already in progress
        if (this.isRendering) {
            return;
        }

        // Configuration missing?
        if (!opt) {
            throw new Error(`Config missing.`);
        }

        // Analyze audio if not already done so
        if (!this.audio || (opt && opt.audioContextOptions !== this.options?.audioContextOptions)) {
            this.audio = await createAudioBuffer(this.file as Blob, opt.audioContextOptions);
        }

        // Check if the amount of details needeed has increased
        if (
            this.canvas && this.options && (!opt || (
                opt.height <= this.options.height &&
                opt.width <= this.options.width &&
                opt.minDecibels === this.options.minDecibels &&
                opt.maxDecibels === this.options.maxDecibels
            ))
        ) return;

        this.options = {
            ...this.options,
            ...opt
        };

        // Find next higher number with the power of two to fit the screen height
        let fftSize = 2;
        while ((fftSize / 2) < opt.height) {
            fftSize *= 2;
        }

        // Analyze file
        this.isRendering = true;
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
        const colors = SpectrumRenderer.COLORS;

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
        const canvas = this.canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        (canvas.getContext('2d', {
            alpha: false
        }) as CanvasRenderingContext2D).putImageData(imageData, 0, 0);

        this.isRendering = false;
    }
}
