import {AudioFileSpectrumRenderer, createAudioFileSpectrumRenderer, createRealtimeSpectrumRenderer, RealtimeSpectrumRenderer, TimeFrame} from '@lib/core';
import {DecibelBarVisuals, renderDecibelBar} from '@ui/renderDecibelBar';
import {FrequencyBandVisuals, renderFrequencyBand} from '@ui/renderFrequencyBand';
import {renderInfoText} from '@ui/renderInfoText';
import {renderTimeBar, TimeBarVisuals} from '@ui/renderTimeBar';
import {applyMargin, Margin} from '@ui/utils';
import {resolveRealCanvasSize} from '@utils/resizeAndClearCanvas';
import {selectFile} from '@utils/selectFile';
import prettyBytes from 'pretty-bytes';

const margin: Margin = {
    top: 35,
    right: 100,
    bottom: 35,
    left: 65
};

const ticksLayout: TimeBarVisuals = {
    tickMinDistance: 50,
    tickThickness: 1,
    tickLength: 10
};

const decibelBarLayout: DecibelBarVisuals = {
    ...ticksLayout,
    width: 10
};

const frequencyBandLayout: FrequencyBandVisuals = {
    ...ticksLayout
};

// Canvas, context and spectrum renderer
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d', {alpha: false}) as CanvasRenderingContext2D;

let audioContext: OfflineAudioContext | AudioContext | undefined;
let audioAnalyzer: AnalyserNode | undefined;
let audioTimeFrame: TimeFrame | undefined;
let renderer: AudioFileSpectrumRenderer | RealtimeSpectrumRenderer | undefined;

const renderUi = (text: string, graph?: HTMLCanvasElement) => {
    const rect = applyMargin(canvas, margin);

    context.clearRect(0, 0, canvas.width, canvas.height);
    graph && context.drawImage(graph, margin.left, margin.top);

    context.strokeStyle = 'white';
    context.strokeRect(rect.left - 0.5, rect.top - 0.5, rect.width + 1, rect.height + 1);

    audioTimeFrame && renderTimeBar({
        context, margin,
        time: audioTimeFrame,
        layout: ticksLayout
    });

    renderDecibelBar({
        context, margin,
        decibelRange: audioAnalyzer,
        layout: decibelBarLayout
    });

    renderFrequencyBand({
        context, margin,
        layout: frequencyBandLayout,
        sampleRate: audioContext?.sampleRate
    });

    renderInfoText({context, margin, text});
};

const resize = () => {
    const {width, height} = resolveRealCanvasSize(canvas);
    const {top, right, bottom, left} = margin;

    canvas.width = width;
    canvas.height = height;

    renderer?.resize(width - left - right, height - top - bottom);
    renderUi(audioContext ? 'Loading...' : 'Record (press "R") or select a file to render the spectrum for :)');
};

const mountFileBased = () => {
    renderer?.destroy();
    renderer = createAudioFileSpectrumRenderer((data) => {
        const sampleRate = data.audioContext.sampleRate.toLocaleString();
        const bitrate = (data.audioBuffer.length / data.audioBuffer.duration) * 8;
        const text = `${data.audioFile.name} (${data.audioFile.type}, ${sampleRate} Hz, ${bitrate / 1000}kbps, ${data.audioBuffer.numberOfChannels} channels)`;

        audioTimeFrame = {start: 0, end: data.audioBuffer.duration};
        audioAnalyzer = data.audioAnalyzer;
        audioContext = data.audioContext;

        renderUi(text, data.canvas);
    });

    resize();
};

const mountRealtime = () => {
    renderer?.destroy();
    renderer = createRealtimeSpectrumRenderer((data) => {
        const sampleRateText = data.audioContext.sampleRate.toLocaleString();
        const bufferText = prettyBytes(data.bufferSize, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        const text = `🔴 Recording with a sample-rate of ${sampleRateText} (Buffer: ${bufferText})`;

        audioTimeFrame = data.time;
        audioAnalyzer = data.audioAnalyzer;
        audioContext = data.audioContext;

        renderUi(text, data.canvas);
    });

    resize();
};

const toggleHelpScreen = () => document.getElementById('help')?.classList.toggle('visible');

// File input
canvas.addEventListener('click', () => {
    selectFile({
        multiple: false,
        accept: 'audio/*'
    }).then(file => {
        if (renderer?.name !== 'AudioFileSpectrumRenderer') mountFileBased();
        void (renderer as AudioFileSpectrumRenderer).render(file);
    });
});

// Keyboard shortcuts
window.addEventListener('keydown', (evt: KeyboardEvent) => {
    if (evt.ctrlKey || evt.metaKey) {
        evt.preventDefault();
        if (!renderer) return;
        switch (evt.code) {
            case 'ArrowUp':
                renderer.analyzerOptions[evt.shiftKey ? 'minDecibels' : 'maxDecibels'] += 1;
                break;
            case 'ArrowDown':
                renderer.analyzerOptions[evt.shiftKey ? 'minDecibels' : 'maxDecibels'] -= 1;
                break;
        }
    } else {
        switch (evt.code) {
            case 'KeyF':
                document.getElementById('header')?.classList.toggle('visible');
                resize();
                break;
            case 'KeyH':
                toggleHelpScreen();
                break;
            case 'KeyR':
                mountRealtime();
                void (renderer as RealtimeSpectrumRenderer).start();
        }
    }
});

// React to browser changes
window.addEventListener('resize', resize);
document.addEventListener('fullscreenchange', resize);

// Buttons
document.getElementById('help-screen-btn')?.addEventListener('click', toggleHelpScreen);
document.getElementById('help')?.addEventListener('click', toggleHelpScreen);

// Initialize
resize();
