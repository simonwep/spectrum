import {applyMargin, Margin} from './/utils';
import {findFittingTicksAmount} from './utils/findFittingTicksAmount';
import {prettyDuration} from '@utils/prettyDuration';
import {TimeFrame} from '../lib/createRealtimeSpectrumRenderer';

export interface TimeBarVisuals {
    tickLength: number;
    tickThickness: number;
    tickMinDistance: number;
}

export interface TimeBarOptions {
    context: CanvasRenderingContext2D;
    time: TimeFrame;
    margin: Margin;
    layout: TimeBarVisuals;
}

export const renderTimeBar = ({context, time, layout, margin}: TimeBarOptions) => {
    const rect = applyMargin(context.canvas, margin);

    const outerBoxWidth = rect.width + 1;
    const [ticks, spacing] = findFittingTicksAmount(layout.tickMinDistance * 2, outerBoxWidth);
    const duration = time.end - time.start;

    context.fillStyle = 'white';
    context.strokeStyle = 'white';
    context.textAlign = 'center';
    context.textBaseline = 'hanging';
    context.font = '12px monospace';

    for (let i = 0; i <= ticks; i++) {
        const x = rect.left + (i * spacing) - 1;
        const text = prettyDuration(Math.floor(time.start + (i / ticks) * duration));

        // Tick
        context.fillRect(x, rect.bottom, layout.tickThickness, layout.tickLength);
        context.fillText(text, x, rect.bottom + layout.tickLength + 2);
    }
};
