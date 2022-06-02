import {Margin} from './/utils';

export interface InfoTextOptions {
    context: CanvasRenderingContext2D;
    margin: Margin;
    text: string;
}

export const renderInfoText = ({context, margin, text}: InfoTextOptions): void => {
    context.textAlign = 'left';
    context.textBaseline = 'bottom';
    context.font = '14px monospace';
    context.fillText(text, margin.left, margin.top - 8);
};
