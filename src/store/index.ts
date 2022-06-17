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

let state: State = {
  renderer: undefined,
  rendererInstance: undefined,
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

  const setRendererInstance = (rendererInstance: RendererInstance) =>
    setState({ ...state, rendererInstance });

  useEffect(() => {
    hooks.add(update);
    return () => hooks.delete(update);
  });

  return { state, setRenderer, setRendererInstance };
};
