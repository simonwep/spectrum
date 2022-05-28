export type UnbindResizeObserver = () => void;

export const createCanvasResizeObserver = (canvas: HTMLCanvasElement, onResize: () => void): UnbindResizeObserver => {
    const canvasResizeObserver = new MutationObserver(onResize);

    canvasResizeObserver.observe(canvas, {
        attributes: true,
        attributeFilter: ['width', 'height']
    });

    return () => canvasResizeObserver.disconnect();
};
