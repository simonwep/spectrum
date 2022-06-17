import {
  AudioFileSpectrumRenderer,
  RealtimeSpectrumRenderer,
} from '@core/lib/renderer';
import { StateUpdater, useEffect, useState } from 'preact/hooks';

export interface RealtimeRenderer {
  type: 'realtime';
}

export interface FileRenderer {
  type: 'file';
  file: File;
}

export type RenderType = RealtimeRenderer | FileRenderer | undefined;

export type RendererInstance =
  | RealtimeSpectrumRenderer
  | AudioFileSpectrumRenderer
  | undefined;

export interface State {
  renderer: RenderType;
  rendererInstance: RendererInstance;
}

const INITIAL_STATE: State = {
  renderer: undefined,
  rendererInstance: undefined,
};

const hooks: Set<StateUpdater<State>> = new Set();
const setState = (next: State) => {
  hooks.forEach((render) => render(next));
};

export const useStore = () => {
  const [state, update] = useState(INITIAL_STATE);

  const setRenderer = (renderer: RenderType) =>
    setState({ ...state, renderer, rendererInstance: undefined });

  const setRendererInstance = (rendererInstance: RendererInstance) =>
    setState({ ...state, rendererInstance });

  useEffect(() => {
    hooks.add(update);
    return () => hooks.delete(update);
  });

  return { state, setRenderer, setRendererInstance };
};
