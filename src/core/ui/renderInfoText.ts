import { px } from '@utils/device';
import { SPECTRUM_UI_FONT_SIZE } from '../../constants';
import { Margin } from './utils';

export interface InfoTextOptions {
  context: CanvasRenderingContext2D;
  margin: Margin;
  text: string;
}

export const renderInfoText = ({
  context,
  margin,
  text,
}: InfoTextOptions): void => {
  context.fillStyle = 'white';
  context.textAlign = 'left';
  context.textBaseline = 'bottom';
  context.font = SPECTRUM_UI_FONT_SIZE;
  context.fillText(text, margin.left, margin.top - px(8));
};
