import { StateUpdater, useEffect, useState } from 'preact/hooks';

export interface RealtimeRenderer {
  type: 'realtime';
}

export interface FileRenderer {
  type: 'file';
  file: File;
}

export type RenderType = RealtimeRenderer | FileRenderer | undefined;

export interface State {
  renderer: RenderType;
}

let state: State = {
  renderer: undefined,
};

const hooks: Set<StateUpdater<Record<string, never>>> = new Set();
const setState = (next: State) => {
  state = next;
  hooks.forEach((render) => render({}));
};

export const useStore = () => {
  const [, update] = useState({});

  const setRenderer = (renderer: RenderType) =>
    setState({ ...state, renderer });

  useEffect(() => {
    hooks.add(update);
    return () => hooks.delete(update);
  });

  return { state, setRenderer };
};
