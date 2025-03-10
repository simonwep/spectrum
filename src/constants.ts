import { hslToRgb } from '@utils/colors';
import { px } from '@utils/device';

const HUE_SILENCING = 270;
const HUE_MAX = 300;
const colors: Uint8ClampedArray[] = new Array(256);
for (let i = 0; i <= 255; i++) {
  const color = (colors[255 - i] = new Uint8ClampedArray(4));
  const hue = (i / 255) * HUE_MAX;

  // Towards the end it should just get dark
  const lightness = hue > HUE_SILENCING ? 0.5 * ((300 - hue) / (HUE_MAX - HUE_SILENCING)) : 0.5;

  color.set(hslToRgb(hue / 360, 1, lightness), 0);
  color[3] = 255;
}

export const constants = {
  SPECTRUM_UI_FONT_SIZE: `${px(10)}px monospace`,
  SPECTRUM_UI_COLORS: colors,
  SPECTRUM_BACKGROUND: new Uint8ClampedArray([0, 0, 0, 255]),

  RENDERER_BASE_SAMPLE_RATE: 192_000,
  RENDERER_MIN_VISIBLE_LOUDNESS: 14,
  RENDERER_MIN_DECIBELS: -120,
  RENDERER_MAX_DECIBELS: -20
} as const;
