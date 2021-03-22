interface Size {
    height: number;
    width: number;
}

/**
 * Resolves the actual size of an element in pixel.
 * @param el
 * @param ratio
 */
export const realSize = (
    el: HTMLCanvasElement,
    ratio = devicePixelRatio
): Size => {
    el.width = 0;
    el.height = 0;
    const rect = el.getBoundingClientRect();

    // See https://stackoverflow.com/a/35244519/7664765
    const width = Math.round(ratio * rect.right) - Math.round(ratio * rect.left);
    const height = Math.round(ratio * rect.bottom) - Math.round(ratio * rect.top);
    return {width, height};
};
