/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
type Method = 'addEventListener' | 'removeEventListener';
type AnyFunction = (...arg: any) => any;

export type EventBindingArgs = [
    EventTarget[],
    string[],
    AnyFunction,
    AddEventListenerOptions?
];

interface EventBinding {
    (
      target: (EventTarget | string) | (EventTarget | string)[],
      events: string | Array<string>,
      fn: AnyFunction,
      options?: AddEventListenerOptions
    ): EventBindingArgs;
}

/* eslint-disable prefer-rest-params */
function eventListener(method: Method): EventBinding {
    return (
      target: (EventTarget | string) | (EventTarget | string)[],
      events: string | Array<string>,
      fn: AnyFunction, options = {}
    ): EventBindingArgs => {
        target = Array.isArray(target) ? target : [target];
        events = Array.isArray(events) ? events : [events];

        const normalized: EventTarget[] = target.map(v => typeof v === 'string' ? document.querySelector(v) as EventTarget : v);
        for (const el of normalized) {
            for (const ev of events) {
                el[method](ev, fn as EventListener, {capture: false, ...options});
            }
        }

        return [normalized, events, fn, options];
    };
}

/**
 * Add event(s) to element(s).
 * @param elements DOM-Elements
 * @param events Event names
 * @param fn Callback
 * @param options Optional options
 * @return Array passed arguments
 */
export const on = eventListener('addEventListener');

/**
 * Remove event(s) from element(s).
 * @param elements DOM-Elements
 * @param events Event names
 * @param fn Callback
 * @param options Optional options
 * @return Array passed arguments
 */
export const off = eventListener('removeEventListener');
