import {
  isAudioFileSpectrumRenderer,
  isRealtimeSpectrumRenderer,
  TimeFrame,
} from '@core/lib/renderer';
import { DecibelBarVisuals, renderDecibelBar } from '@core/ui/renderDecibelBar';
import {
  FrequencyBandVisuals,
  renderFrequencyBand,
} from '@core/ui/renderFrequencyBand';
import { renderInfoText } from '@core/ui/renderInfoText';
import { renderTimeBar, TimeBarVisuals } from '@core/ui/renderTimeBar';
import { applyMargin, Margin } from '@core/ui/utils';
import { useStore } from '@store';
import { px } from '@utils/device';
import { resolveRealCanvasSize } from '@utils/resizeAndClearCanvas';
import { FunctionalComponent } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import prettyBytes from 'pretty-bytes';
import { prettyDuration } from '../../../utils/prettyDuration';
import styles from './Canvas.module.scss';

const margin: Margin = {
  top: px(35),
  right: px(100),
  bottom: px(35),
  left: px(65),
};

const ticksLayout: TimeBarVisuals = {
  tickMinDistance: 50,
  tickThickness: 1,
  tickLength: 10,
};

const decibelBarLayout: DecibelBarVisuals = { ...ticksLayout, width: 10 };
const frequencyBandLayout: FrequencyBandVisuals = { ...ticksLayout };

export const Canvas: FunctionalComponent = () => {
  const [context, setContext] = useState<CanvasRenderingContext2D>();
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const store = useStore();

  const renderUi = (
    text: string,
    graph?: HTMLCanvasElement,
    time?: TimeFrame,
    analyserNode?: AnalyserNode,
    audioContext?: BaseAudioContext,
    audio?: HTMLAudioElement
  ) => {
    if (!canvas.current || !context) return;

    const rect = applyMargin(canvas.current, margin);

    context.clearRect(0, 0, canvas.current.width, canvas.current.height);
    graph && context.drawImage(graph, margin.left, margin.top);

    context.fillStyle = 'white';
    context.strokeStyle = 'white';

    context.strokeRect(
      rect.left - 0.5,
      rect.top - 0.5,
      rect.width + 1,
      rect.height + 1
    );

    if (time) {
      renderTimeBar({
        context,
        margin,
        time,
        currentTime: audio?.currentTime,
        layout: ticksLayout,
      });
    }

    renderDecibelBar({
      context,
      margin,
      decibelRange: analyserNode,
      layout: decibelBarLayout,
    });

    renderFrequencyBand({
      context,
      margin,
      layout: frequencyBandLayout,
      sampleRate: audioContext?.sampleRate,
    });

    renderInfoText({ context, margin, text });
  };

  const resize = () => {
    if (!canvas.current || !context) return;

    const { width, height } = resolveRealCanvasSize(canvas.current);
    const { top, right, bottom, left } = margin;

    canvas.current.width = width;
    canvas.current.height = height;

    renderUi(
      store.state.renderer
        ? 'Loading...'
        : 'Activate microphone or select an file to analyze...'
    );

    store.state.rendererInstance?.resize(
      width - left - right,
      height - top - bottom
    );
  };

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  });

  useEffect(() => {
    setContext(
      canvas.current?.getContext('2d', {
        alpha: false,
      }) as CanvasRenderingContext2D
    );
  }, [canvas]);

  useEffect(() => {
    if (!context) return;
    const instance = store.state.rendererInstance;

    if (isRealtimeSpectrumRenderer(instance)) {
      instance.on('update', (data) => {
        const sampleRateText = data.audioContext.sampleRate.toLocaleString();
        const bufferText = prettyBytes(data.bufferSize, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });

        renderUi(
          `Recording with a sample-rate of ${sampleRateText} (Buffer: ${bufferText})`,
          data.canvas,
          data.time,
          data.audioAnalyzer,
          data.audioContext
        );
      });
    } else if (isAudioFileSpectrumRenderer(instance)) {
      instance.on('update', (data) => {
        const { length, duration, numberOfChannels } = data.audioBuffer;
        const { name, type } = data.audioFile;
        const { currentTime } = data.audio ?? { currentTime: 0 };
        const sampleRate = data.audioContext.sampleRate.toLocaleString();
        const bitrate = ((length / duration) * 8) / 1000;

        const text =
          `${name} (${type}, ${sampleRate} Hz, ${bitrate}kbps, ${numberOfChannels} channels)` +
          (data.audio
            ? ` (playing - ${prettyDuration(currentTime)} / ${prettyDuration(
                duration
              )})`
            : '');

        renderUi(
          text,
          data.canvas,
          { start: 0, end: data.audioBuffer.duration },
          data.audioAnalyzer,
          data.audioContext,
          data.audio
        );
      });
    } else {
      resize();
    }
  }, [store.state.rendererInstance]);

  return (
    <div className={styles.canvas} style="color: red">
      <canvas ref={canvas} />
    </div>
  );
};
