type AnyAsyncFunction = (...args: unknown[]) => Promise<unknown>;

/**
 * Throttles the execution of an promise
 * @param fn
 * @param limit
 */
export const throttlePromise = <F extends AnyAsyncFunction>(fn: F, limit = 500): ((...args: Parameters<F>) => void) => {
    let lastExecution = 0, timeout = -1;

    return function wrapper(...args: Parameters<F>): void {
        const now = performance.now();
        const diff = now - lastExecution;

        if (diff >= limit) {
            clearTimeout(timeout);
            fn(...args).then(() => {
                lastExecution = now;
                timeout = -1;
            });
        } else if (timeout === -1) {
            timeout = setTimeout(() => fn(...args), diff);
        }
    };
};
