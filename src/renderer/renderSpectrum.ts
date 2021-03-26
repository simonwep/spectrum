import {SpectrumRenderer} from '@audio/SpectrumRenderer';
import {Configuration} from '../setup';

interface RenderSpectrumOptions {
    renderer: SpectrumRenderer;
    context: CanvasRenderingContext2D;
    config: Configuration;
}

/**
 * Draws the most recently rendered spectrum.
 * @param opt
 */
export const drawSpectrum = (opt: RenderSpectrumOptions): void => {
    const {renderer, context, config} = opt;
    const {width, height} = context.canvas;
    context.resetTransform();

    // Render spectrum
    const spectrum = renderer.getSpectrum();
    if (spectrum) {
        const [t, r, b, l] = config.visuals.graphMargin;
        context.drawImage(spectrum, l, t, width - r - l, height - t - b);
        context.translate(0.5, 0.5);
    }
};

/**
 * Renders an audio spectrum to a canvas context.
 * @param opt
 */
export const renderSpectrum = async (opt: RenderSpectrumOptions): Promise<void> => {
    const {renderer, context, config: {analyzer, audioContextOptions}} = opt;
    const {width, height} = context.canvas;

    // Render spectrum
    const {minDecibels, maxDecibels} = analyzer;
    await renderer.startRender({
        width,
        height,
        minDecibels,
        maxDecibels,
        audioContextOptions
    });

    drawSpectrum(opt);
};
