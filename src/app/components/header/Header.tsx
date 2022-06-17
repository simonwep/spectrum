import { RealtimeSpectrumRenderer } from '@core/lib/renderer';
import { useStore } from '@store';
import { selectFile } from '@utils/selectFile';
import { FunctionalComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Icon } from '../icon/Icon';
import styles from './Header.module.scss';

export const Header: FunctionalComponent = () => {
  const [recording, setRecording] = useState(false);
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
    const instance = store.state.rendererInstance as RealtimeSpectrumRenderer;

    if (instance?.name === 'RealtimeSpectrumRenderer') {
      if (instance.state.rendering) {
        void instance.stop();
      } else {
        void instance.start();
      }
    } else {
      store.setRenderer({ type: 'realtime' });
    }
  };

  useEffect(() => {
    const instance = store.state.rendererInstance as RealtimeSpectrumRenderer;

    if (instance?.name === 'RealtimeSpectrumRenderer') {
      instance.on('start', () => setRecording(true));
      instance.on('stop', () => setRecording(false));
      setRecording(instance.state.rendering);
    }
  }, [store.state.rendererInstance]);

  return (
    <div className={styles.header}>
      <button className={styles.realtime} onClick={toggleRecording}>
        <Icon icon={recording ? 'mic' : 'mic-off'} />
      </button>

      {store.state.renderer?.type === 'realtime' && (
        <button className={styles.startStop} onClick={reset}>
          <Icon icon="reset" />
        </button>
      )}

      <button className={styles.file} onClick={openFile}>
        <Icon
          icon={store.state.renderer?.type === 'file' ? 'file-music' : 'file'}
        />
      </button>

      <a
        href="https://github.com/Simonwep/spectrum"
        className={styles.gitHubLink}
      >
        <Icon icon="github" />
      </a>
    </div>
  );
};
