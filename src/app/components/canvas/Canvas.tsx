import {
  AudioFileSpectrumRenderer,
  createAudioFileSpectrumRenderer,
  createRealtimeSpectrumRenderer,
  RealtimeSpectrumRenderer,
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
import { resolveRealCanvasSize } from '@utils/resizeAndClearCanvas';
import { FunctionalComponent } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import prettyBytes from 'pretty-bytes';
import { SPECTRUM_BACKGROUND, SPECTRUM_UI_COLORS } from '../../../constants';
import styles from './Canvas.module.scss';

const margin: Margin = { top: 35, right: 100, bottom: 35, left: 65 };
const ticksLayout: TimeBarVisuals = {
  tickMinDistance: 50,
  tickThickness: 1,
  tickLength: 10,
};

const decibelBarLayout: DecibelBarVisuals = { ...ticksLayout, width: 10 };
const frequencyBandLayout: FrequencyBandVisuals = { ...ticksLayout };

export const Canvas: FunctionalComponent = () => {
  const [renderer, setRenderer] = useState<
    AudioFileSpectrumRenderer | RealtimeSpectrumRenderer
  >();

  const [context, setContext] = useState<CanvasRenderingContext2D>();
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const store = useStore();

  const renderUi = (
    text: string,
    graph?: HTMLCanvasElement,
    time?: TimeFrame,
    analyserNode?: AnalyserNode,
    audioContext?: BaseAudioContext
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

    renderUi('Record audio or select an file to analyze...');
    renderer?.resize(width - left - right, height - top - bottom);
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
    renderer?.destroy();

    switch (store.state.renderer?.type) {
      case 'realtime':
        const realtime = createRealtimeSpectrumRenderer(
          SPECTRUM_UI_COLORS,
          SPECTRUM_BACKGROUND
        );

        realtime.on('update', (data) => {
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

        setRenderer(realtime);
        store.setRendererInstance(realtime);
        void realtime.start();
        break;
      case 'file':
        const file = createAudioFileSpectrumRenderer(SPECTRUM_UI_COLORS);

        file.on('update', (data) => {
          const buffer = data.audioBuffer;
          const file = data.audioFile;
          const sampleRate = data.audioContext.sampleRate.toLocaleString();
          const bitrate = (buffer.length / buffer.duration) * 8;

          renderUi(
            `${file.name} (${file.type}, ${sampleRate} Hz, ${
              bitrate / 1000
            }kbps, ${buffer.numberOfChannels} channels)`,
            data.canvas,
            { start: 0, end: data.audioBuffer.duration },
            data.audioAnalyzer,
            data.audioContext
          );
        });

        setRenderer(file);
        store.setRendererInstance(file);
        void file.render(store.state.renderer.file);
        break;
      default:
        setRenderer(undefined);
        resize();
    }
  }, [store.state.renderer, context]);

  return (
    <div className={styles.canvas} style="color: red">
      <canvas ref={canvas} />
    </div>
  );
};
