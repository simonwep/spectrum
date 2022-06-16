import { Margin } from './/utils';

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
  context.font = '12px monospace';
  context.fillText(text, margin.left, margin.top - 8);
};
