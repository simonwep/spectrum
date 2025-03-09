import { Slider } from '@components/slider/Slider';
import { isAudioFileSpectrumRenderer, isRealtimeSpectrumRenderer } from '@core/lib/renderer';
import { useStore } from '@store';
import { selectFile } from '@utils/selectFile';
import { FunctionalComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Icon } from '../icon/Icon';
import styles from './Header.module.scss';

export const Header: FunctionalComponent = () => {
  const [rendering, setRendering] = useState(false);
  const [recording, setRecording] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const store = useStore();

  const reset = () => {
    void store.changeRenderer(undefined);
  };

  const openFile = () => {
    selectFile({
      multiple: false,
      accept: 'audio/*'
    }).then((file) => {
      void store.changeRenderer({ file, type: 'file' });
    });
  };

  const toggleRecording = () => {
    const instance = store.state.rendererInstance;

    if (isRealtimeSpectrumRenderer(instance)) {
      if (instance.isRecording()) {
        void instance.stop();
      } else {
        void instance.start();
      }
    } else {
      void store.changeRenderer({ type: 'realtime' });
    }
  };

  const togglePlaying = () => {
    const instance = store.state.rendererInstance;

    if (isAudioFileSpectrumRenderer(instance)) {
      if (instance.isPlaying()) {
        void instance.pause();
      } else {
        void instance.play();
      }
    } else {
      void store.changeRenderer({ type: 'realtime' });
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
      instance.on('pause', () => setPlaying(false));
      instance.on('beforePlay', () => instance.setVolume(volume));
      instance.on('play', () => setPlaying(true));
      instance.on('start', () => setRendering(true));
      instance.on('stop', () => setRendering(false));
      setPlaying(instance.isPlaying());
      setRendering(instance.isRendering());
    } else if (isRealtimeSpectrumRenderer(instance)) {
      instance.on('start', () => setRecording(true));
      instance.on('stop', () => setRecording(false));
      setRecording(instance.isRecording());
      setRendering(instance.isRecording());
    }
  }, [store.state.rendererInstance?.name]);

  useEffect(() => {
    if (isAudioFileSpectrumRenderer(store.state.rendererInstance)) {
      store.state.rendererInstance.setVolume(volume);
    }
  }, [volume]);

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
        <Icon icon={store.state.renderer?.type === 'file' ? 'file-music' : 'file'} />
      </button>

      {store.state.renderer?.type === 'file' && !rendering && (
        <>
          <button onClick={togglePlaying}>
            <Icon icon={playing ? 'pause' : 'play'} />
          </button>
          <button onClick={rewind}>
            <Icon icon="rewind" />
          </button>
          <Slider value={volume} onChange={setVolume} />
        </>
      )}

      <a href="https://github.com/simonwep/spectrum" className={styles.gitHubLink}>
        <Icon icon="github" />
      </a>
    </div>
  );
};
