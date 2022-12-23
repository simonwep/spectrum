import {
  AudioFileSpectrumRenderer,
  createAudioFileSpectrumRenderer,
  createRealtimeSpectrumRenderer,
  RealtimeSpectrumRenderer,
} from '@core/lib/renderer';
import { StateUpdater, useEffect, useState } from 'preact/hooks';
import { SPECTRUM_BACKGROUND, SPECTRUM_UI_COLORS } from '@constants';

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

const createInstance = (type: RenderType): RendererInstance => {
  switch (type?.type) {
    case 'file': {
      const renderer = createAudioFileSpectrumRenderer(SPECTRUM_UI_COLORS);
      requestAnimationFrame(() => void renderer.render(type.file));
      return renderer;
    }
    case 'realtime': {
      const renderer = createRealtimeSpectrumRenderer(
        SPECTRUM_UI_COLORS,
        SPECTRUM_BACKGROUND
      );
      void renderer.start();
      return renderer;
    }
    default:
      return undefined;
  }
};

export const useStore = () => {
  const [state, update] = useState(INITIAL_STATE);

  const changeRenderer = async (renderer: RenderType) => {
    await state.rendererInstance?.destroy();
    const rendererInstance = createInstance(renderer);
    setState({ ...state, renderer, rendererInstance });
  };

  useEffect(() => {
    hooks.add(update);
    return () => hooks.delete(update);
  });

  return { state, changeRenderer };
};
