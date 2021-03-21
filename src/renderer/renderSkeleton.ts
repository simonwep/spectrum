import {SpectrumRenderer} from '@audio/SpectrumRenderer';
import {findFittingTicksAmount} from '@utils/geometric';
import {prettyDuration} from '@utils/prettyDuration';
import {Configuration} from '../app';

interface RenderSkeletonOptions {
    renderer?: SpectrumRenderer;
    context: CanvasRenderingContext2D;
    config: Configuration;
}

/**
 * Renders the ui skeleton
 * @param opt
 */
export const renderSkeleton = (opt: RenderSkeletonOptions): void => {
    const {context, renderer, config: {visuals, analyzer}} = opt;
    context.resetTransform();

    const {width, height} = context.canvas;
    const [t, r, b, l] = visuals.graphMargin;
    const boxHeight = height - t - b;
    const boxWidth = width - r - l;

    // Draw graph box
    {
        context.strokeStyle = 'white';
        context.strokeRect(l - 0.5, t - 0.5, boxWidth + 1, boxHeight + 1);
    }

    // Draw decibel bar
    {
        const x0 = width - r + 10;
        const y0 = t - 1;
        const x1 = x0 + visuals.decibelBarWidth;
        const y1 = height - b + 1;
        const decibelGradient = context.createLinearGradient(x0, y0, x1, y1);
        const decibelGradientColors = SpectrumRenderer.COLORS;

        for (let i = 0; i < decibelGradientColors.length; i++) {
            const [r, g, b] = decibelGradientColors[(decibelGradientColors.length - i - 1)];
            decibelGradient.addColorStop(i / decibelGradientColors.length, `rgb(${r}, ${g}, ${b})`);
        }

        context.fillStyle = decibelGradient;
        context.fillRect(x0, y0, visuals.decibelBarWidth, boxHeight);

        // Draw ticks for decimal bar
        const [ticks, spacing] = findFittingTicksAmount(visuals.tickMinDistance, boxHeight);
        const decibelsDifference = analyzer.minDecibels - analyzer.maxDecibels;
        for (let i = 0; i <= ticks; i++) {
            const y = y0 + (i * spacing);
            const text = `${Math.floor(((i / ticks) * decibelsDifference) + analyzer.maxDecibels)} dB`;

            // Tick
            context.fillStyle = decibelGradient;
            context.fillRect(x1, y, visuals.tickLength, visuals.tickThickness);

            // Text
            context.fillStyle = 'white';
            context.textAlign = 'left';
            context.textBaseline = 'middle';
            context.font = '12px monospace';
            context.fillText(text, x1 + visuals.tickLength + 2, y + 1);
        }
    }

    // Renderere dependent information
    if (renderer?.audio) {
        const {sampleRate, duration, numberOfChannels} = renderer.audio;

        // Draw kHz ticks
        {
            context.fillStyle = 'white';
            const outerBoxHeight = boxHeight + 1;
            const [ticks, spacing] = findFittingTicksAmount(visuals.tickMinDistance, outerBoxHeight);
            const spectrum = sampleRate / 2 / 1000;
            for (let i = 0; i <= ticks; i++) {
                const y = t + (i * spacing) - 1;
                const text = `${Math.floor(((ticks - i) / ticks) * spectrum)} kHz`;

                // Tick
                context.fillRect(l - visuals.tickLength, y, visuals.tickLength, visuals.tickThickness);
                context.textAlign = 'right';
                context.textBaseline = 'middle';
                context.font = '12px monospace';
                context.fillText(text, l - visuals.tickLength - 2, y + 1);
            }
        }

        // Draw duration ticks
        {
            const outerBoxWidth = boxWidth + 1;
            const [ticks, spacing] = findFittingTicksAmount(visuals.tickMinDistance * 2, outerBoxWidth);
            for (let i = 0; i <= ticks; i++) {
                const x = l + (i * spacing) - 1;
                const text = prettyDuration(Math.floor((i / ticks) * duration));

                // Tick
                context.fillRect(x, t + boxHeight, visuals.tickThickness, visuals.tickLength);
                context.textAlign = 'center';
                context.textBaseline = 'hanging';
                context.font = '12px monospace';
                context.fillText(text, x, t + boxHeight + visuals.tickLength + 2);
            }
        }

        // Draw info text
        {
            const {name, type} = renderer.file;
            const infoText = `${name} (${type}, ${sampleRate} Hz, ${numberOfChannels} channels)`;
            context.textAlign = 'left';
            context.textBaseline = 'bottom';
            context.font = '14px monospace';
            context.fillText(infoText, l, t - 8);
        }
    }
};
