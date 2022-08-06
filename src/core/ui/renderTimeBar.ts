import { prettyDuration } from '@utils/prettyDuration';
import { SPECTRUM_UI_FONT_SIZE } from '../../constants';
import { TimeFrame } from '../lib/renderer';
import { applyMargin, Margin } from './utils';
import { findFittingTicksAmount } from './utils/findFittingTicksAmount';

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
  currentTime?: number;
}

export const renderTimeBar = ({
  context,
  time,
  layout,
  margin,
  currentTime,
}: TimeBarOptions) => {
  const rect = applyMargin(context.canvas, margin);
  const duration = time.end - time.start;
  const outerBoxWidth = rect.width + 1;
  const [ticks, spacing] = findFittingTicksAmount(
    layout.tickMinDistance * 2,
    outerBoxWidth
  );

  context.strokeStyle = 'white';
  context.fillStyle = 'white';
  context.textAlign = 'center';
  context.textBaseline = 'hanging';
  context.font = SPECTRUM_UI_FONT_SIZE;

  const usedSpace: [number, number][] = [];
  for (let i = 0; i <= ticks; i++) {
    const x = rect.left + i * spacing - 1;
    const text = prettyDuration(time.start + (i / ticks) * duration);

    // Tick
    context.fillRect(x, rect.bottom, layout.tickThickness, layout.tickLength);
    context.fillText(text, x, rect.bottom + layout.tickLength + 2);
    usedSpace.push([x, x + context.measureText(text).width]);
  }

  // Current time
  if (currentTime !== undefined) {
    const x = Math.floor(rect.left + (currentTime / duration) * outerBoxWidth);
    const y = rect.bottom + 1;
    const h = layout.tickLength / 2;

    context.fillStyle = 'white';
    context.fillRect(x, y, layout.tickThickness, h);

    const text = prettyDuration(currentTime);
    const space = context.measureText(text);

    if (!usedSpace.some((v) => x + space.width > v[0] && x < v[1])) {
      context.fillText(text, x, rect.bottom + h + 2);
    }
  }
};
