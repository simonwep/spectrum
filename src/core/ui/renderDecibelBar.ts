import { SPECTRUM_UI_COLORS } from '../../constants';
import { applyMargin, Margin } from './utils';
import { findFittingTicksAmount } from './utils/findFittingTicksAmount';

export interface DecibelBarVisuals {
  width: number;
  tickLength: number;
  tickThickness: number;
  tickMinDistance: number;
}

export interface DecibelBarRange {
  minDecibels: number;
  maxDecibels: number;
}

export interface DecibelBarOptions {
  context: CanvasRenderingContext2D;
  margin: Margin;
  layout: DecibelBarVisuals;
  decibelRange?: DecibelBarRange;
}

const DEFAULT_RANGE: DecibelBarRange = {
  minDecibels: -120,
  maxDecibels: -20,
};

export const renderDecibelBar = ({
  context,
  margin,
  layout,
  decibelRange = DEFAULT_RANGE,
}: DecibelBarOptions) => {
  const rect = applyMargin(context.canvas, margin);

  const x0 = rect.right + 10;
  const y0 = rect.top - 1;
  const x1 = x0 + layout.width;
  const y1 = rect.bottom + 1;
  const decibelGradient = context.createLinearGradient(x0, y0, x1, y1);

  for (let i = 0; i < SPECTRUM_UI_COLORS.length; i++) {
    const [r, g, b] = SPECTRUM_UI_COLORS[SPECTRUM_UI_COLORS.length - i - 1];
    decibelGradient.addColorStop(
      i / SPECTRUM_UI_COLORS.length,
      `rgb(${r}, ${g}, ${b})`
    );
  }

  context.fillStyle = decibelGradient;
  context.fillRect(x0, y0, layout.width, rect.height);
  context.textAlign = 'left';
  context.textBaseline = 'middle';

  // Draw ticks for decimal bar
  const [ticks, spacing] = findFittingTicksAmount(
    layout.tickMinDistance,
    rect.height
  );
  const decibelsDifference =
    decibelRange.minDecibels - decibelRange.maxDecibels;
  for (let i = 0; i <= ticks; i++) {
    const y = y0 + i * spacing;
    const text = `${Math.floor(
      (i / ticks) * decibelsDifference + decibelRange.maxDecibels
    )} dB`;

    // Tick
    context.fillStyle = decibelGradient;
    context.fillRect(x1, y, layout.tickLength, layout.tickThickness);

    // Text
    context.fillStyle = 'white';
    context.fillText(text, x1 + layout.tickLength + 2, y + 1);
  }
};
