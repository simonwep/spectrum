import {
  isAudioFileSpectrumRenderer,
  isRealtimeSpectrumRenderer,
} from '@core/lib/renderer';
import { useStore } from '@store';
import { selectFile } from '@utils/selectFile';
import { FunctionalComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Icon } from '../icon/Icon';
import styles from './Header.module.scss';

export const Header: FunctionalComponent = () => {
  const [recording, setRecording] = useState(false);
  const [playing, setPlaying] = useState(false);
  const store = useStore();

  const reset = () => {
    store.setRenderer(undefined);
  };

  const openFile = () => {
    selectFile({
      multiple: false,
      accept: 'audio/*',
    }).then((file) => {
      store.setRenderer({ file, type: 'file' });
    });
  };

  const toggleRecording = () => {
    const instance = store.state.rendererInstance;

    if (isRealtimeSpectrumRenderer(instance)) {
      if (instance.state.rendering) {
        void instance.stop();
      } else {
        void instance.start();
      }
    } else {
      store.setRenderer({ type: 'realtime' });
    }
  };

  const togglePlaying = () => {
    const instance = store.state.rendererInstance;

    if (isAudioFileSpectrumRenderer(instance)) {
      if (instance.state.playing) {
        void instance.pause();
      } else {
        void instance.play();
      }
    } else {
      store.setRenderer({ type: 'realtime' });
    }
  };

  const rewind = () => {
    if (isAudioFileSpectrumRenderer(store.state.rendererInstance)) {
      store.state.rendererInstance.rewind();
    }
  };

  useEffect(() => {
    const instance = store.state.rendererInstance;

    if (isAudioFileSpectrumRenderer(instance)) {
      instance.on('play', () => setPlaying(true));
      instance.on('pause', () => setPlaying(false));
      setPlaying(instance.state.playing);
    } else if (isRealtimeSpectrumRenderer(instance)) {
      instance.on('start', () => setRecording(true));
      instance.on('stop', () => setRecording(false));
      setRecording(instance.state.rendering);
    }
  }, [store.state.rendererInstance]);

  return (
    <div className={styles.header}>
      <button onClick={toggleRecording}>
        <Icon icon={recording ? 'mic' : 'mic-off'} />
      </button>

      {store.state.renderer?.type === 'realtime' && (
        <button onClick={reset}>
          <Icon icon="reset" />
        </button>
      )}

      <button onClick={openFile}>
        <Icon
          icon={store.state.renderer?.type === 'file' ? 'file-music' : 'file'}
        />
      </button>

      {store.state.renderer?.type === 'file' && (
        <>
          <button onClick={togglePlaying}>
            <Icon icon={playing ? 'pause' : 'play'} />
          </button>
          <button onClick={rewind}>
            <Icon icon="reset" />
          </button>
        </>
      )}

      <a
        href="https://github.com/Simonwep/spectrum"
        className={styles.gitHubLink}
      >
        <Icon icon="github" />
      </a>
    </div>
  );
};
