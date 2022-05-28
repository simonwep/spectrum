type AnyAsyncFunction = (...args: unknown[]) => Promise<unknown>;

export const throttlePromise = <F extends AnyAsyncFunction>(fn: F, time = 500): ((...args: Parameters<F>) => void) => {
    let lastExecution = -1;
    let lastArgs: Parameters<F>, timeout = -1, active = false;

    const exec = async () => {
        active = true;
        await fn(...lastArgs);
        lastExecution = performance.now();
        active = false;
    };

    return (...args: Parameters<F>): void => {
        lastArgs = args;

        if (active) {
            return;
        }

        clearTimeout(timeout);
        const diff = performance.now() - lastExecution;
        if (diff >= time) {
            void exec();
        } else {
            timeout = setTimeout(exec, diff);
        }
    };
};
