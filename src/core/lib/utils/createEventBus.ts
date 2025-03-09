/* eslint-disable @typescript-eslint/no-explicit-any */
export type AnyFunction = (...args: any) => void;

export const createEventBus = <M extends Record<string, any>>() => {
  const listeners: Map<keyof M, AnyFunction[]> = new Map();

  return {
    emit<K extends keyof M>(e: K, ...d: M[K] extends void ? [undefined?] : [M[K]]) {
      listeners.get(e)?.forEach((f) => f(...d));
    },

    on<K extends keyof M>(e: K, f: (...evt: M[K] extends void ? [undefined?] : [M[K]]) => void) {
      listeners.set(e, [...(listeners.get(e) ?? []), f]);
    },

    off<K extends keyof M>(e: K, f: (...evt: M[K] extends void ? [undefined?] : [M[K]]) => void) {
      listeners.set(e, listeners.get(e)?.filter((v) => v !== f) ?? []);
    },

    unbindAll() {
      listeners.clear();
    }
  };
};
