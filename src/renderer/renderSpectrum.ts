import {SpectrumRenderer} from '@audio/SpectrumRenderer';
import {Configuration} from '../app';

interface RenderSpectrumOptions {
    renderer: SpectrumRenderer;
    context: CanvasRenderingContext2D;
    config: Configuration;
}

/**
 * Renders an audio spectrum to a canvas context.
 * @param opt
 */
export const renderSpectrum = async (opt: RenderSpectrumOptions): Promise<void> => {
    const {renderer, context, config} = opt;
    const {width, height} = context.canvas;
    context.resetTransform();

    // Render spectrum
    const {minDecibels, maxDecibels} = config.analyzer;
    const spectrum = await renderer.render({
        width,
        height,
        minDecibels,
        maxDecibels
    });

    const [t, r, b, l] = config.visuals.graphMargin;
    context.drawImage(spectrum, l, t, width - r - l, height - t - b);
    context.translate(0.5, 0.5);
};
