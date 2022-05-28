export type CancelNextFrameLoop = () => void;

export const eachFrame = (cb: () => void): CancelNextFrameLoop => {
    let frameId = -1;

    const frame = () => {
        cb();
        frameId = requestAnimationFrame(frame);
    };

    frameId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(frameId);
};
