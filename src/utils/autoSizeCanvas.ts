import {realSize} from '@utils/realSize';

/**
 * Automatically resizes the canvas if the browser's window gets resized.
 * @param canvas
 * @return Function to deactivat it.
 */
export const autoSizeCanvas = (canvas: HTMLCanvasElement): (() => void) => {
    const resize = () => Object.assign(canvas, realSize(canvas));
    window.addEventListener('resize', resize);
    resize();

    return () => window.removeEventListener('resize', resize);
};
