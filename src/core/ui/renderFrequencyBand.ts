import { applyMargin, Margin } from './/utils';
import { findFittingTicksAmount } from './utils/findFittingTicksAmount';

export interface FrequencyBandVisuals {
  tickLength: number;
  tickThickness: number;
  tickMinDistance: number;
}

export interface FrequencyBandOptions {
  context: CanvasRenderingContext2D;
  margin: Margin;
  layout: FrequencyBandVisuals;
  sampleRate?: number;
}

export const renderFrequencyBand = ({
  context,
  margin,
  layout,
  sampleRate = 96_000,
}: FrequencyBandOptions) => {
  const rect = applyMargin(context.canvas, margin);
  const outerBoxHeight = rect.height + 1;
  const spectrum = sampleRate / 2 / 1000;
  const [ticks, spacing] = findFittingTicksAmount(
    layout.tickMinDistance,
    outerBoxHeight
  );

  context.textAlign = 'right';
  context.textBaseline = 'middle';

  for (let i = 0; i <= ticks; i++) {
    const y = rect.top + i * spacing - 1;
    const text = `${Math.floor(((ticks - i) / ticks) * spectrum)} kHz`;

    // Tick
    context.fillRect(
      rect.left - layout.tickLength,
      y,
      layout.tickLength,
      layout.tickThickness
    );
    context.fillText(text, rect.left - layout.tickLength - 2, y + 1);
  }
};
