import {SpectrumRenderer} from '@audio/SpectrumRenderer';
import {on} from '@utils/events';
import {findFittingTicksAmount} from '@utils/geometric';
import {prettyDuration} from '@utils/prettyDuration';
import {realSize} from '@utils/realSize';
import {debounce} from 'debounce';
import './styles/_index.scss';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// Analyzer options
const MIN_DECIBELS = -120;
const MAX_DECIBELS = -20;

// Visual options
const GRAPH_MARGIN = [35, 100, 35, 65];
const DECIBEL_BAR_WIDTH = 10;
const TICK_MIN_DISTANCE = 50;
const TICK_THICKNESS = 1;
const TICK_LENGTH = 10;

let renderer: SpectrumRenderer | undefined;
let {width, height} = canvas;

const resize = () => {
    ({width, height} = realSize(canvas));
    Object.assign(canvas, {width, height});
};

const renderUI = () => {
    ctx.resetTransform();

    const [t, r, b, l] = GRAPH_MARGIN;
    const boxHeight = height - t - b;
    const boxWidth = width - r - l;

    // Draw graph box
    {
        ctx.strokeStyle = 'white';
        ctx.strokeRect(l - 0.5, t - 0.5, boxWidth + 1, boxHeight + 1);
    }

    // Draw decibel bar
    {
        const x0 = width - r + 10;
        const y0 = t - 1;
        const x1 = x0 + DECIBEL_BAR_WIDTH;
        const y1 = height - b + 1;
        const decibelGradient = ctx.createLinearGradient(x0, y0, x1, y1);
        const decibelGradientColors = SpectrumRenderer.COLORS;

        for (let i = 0; i < decibelGradientColors.length; i++) {
            const [r, g, b] = decibelGradientColors[(decibelGradientColors.length - i - 1)];
            decibelGradient.addColorStop(i / decibelGradientColors.length, `rgb(${r}, ${g}, ${b})`);
        }

        ctx.fillStyle = decibelGradient;
        ctx.fillRect(x0, y0, DECIBEL_BAR_WIDTH, boxHeight);

        // Draw ticks for decimal bar
        const [ticks, spacing] = findFittingTicksAmount(TICK_MIN_DISTANCE, boxHeight);
        for (let i = 0; i <= ticks; i++) {
            const y = y0 + (i * spacing);
            const text = `${Math.floor(((i / ticks) * (MIN_DECIBELS - MAX_DECIBELS)) + MAX_DECIBELS)} dB`;

            // Tick
            ctx.fillStyle = decibelGradient;
            ctx.fillRect(x1, y, TICK_LENGTH, TICK_THICKNESS);

            // Text
            ctx.fillStyle = 'white';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.font = '12px monospace';
            ctx.fillText(text, x1 + TICK_LENGTH + 2, y + 1);
        }
    }

    // Renderere dependent information
    if (renderer?.audio) {
        const {sampleRate, duration, numberOfChannels} = renderer.audio;

        // Draw kHz ticks
        {
            ctx.fillStyle = 'white';
            const outerBoxHeight = boxHeight + 1;
            const [ticks, spacing] = findFittingTicksAmount(TICK_MIN_DISTANCE, outerBoxHeight);
            const spectrum = sampleRate / 2 / 1000;
            for (let i = 0; i <= ticks; i++) {
                const y = t + (i * spacing) - 1;
                const text = `${Math.floor(((ticks - i) / ticks) * spectrum)} kHz`;

                // Tick
                ctx.fillRect(l - TICK_LENGTH, y, TICK_LENGTH, TICK_THICKNESS);
                ctx.textAlign = 'right';
                ctx.textBaseline = 'middle';
                ctx.font = '12px monospace';
                ctx.fillText(text, l - TICK_LENGTH - 2, y + 1);
            }
        }

        // Draw duration ticks
        {
            const outerBoxWidth = boxWidth + 1;
            const [ticks, spacing] = findFittingTicksAmount(TICK_MIN_DISTANCE * 2, outerBoxWidth);
            for (let i = 0; i <= ticks; i++) {
                const x = l + (i * spacing) - 1;
                const text = prettyDuration(Math.floor((i / ticks) * duration));

                // Tick
                ctx.fillRect(x, t + boxHeight, TICK_THICKNESS, TICK_LENGTH);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'hanging';
                ctx.font = '12px monospace';
                ctx.fillText(text, x, t + boxHeight + TICK_LENGTH + 2);
            }
        }

        // Draw info text
        {
            const {name, type} = renderer.file;
            const infoText = `${name} (${type}, ${sampleRate} Hz, ${numberOfChannels} channels)`;
            ctx.textAlign = 'left';
            ctx.textBaseline = 'bottom';
            ctx.font = '16px monospace';
            ctx.fillText(infoText, l, t - 8);
        }
    }
};

const renderGraph = async () => {
    if (renderer) {
        ctx.resetTransform();

        // Render spectrum
        const spectrum = await renderer.render({width, height});
        const [t, r, b, l] = GRAPH_MARGIN;
        ctx.drawImage(spectrum, l, t, width - r - l, height - t - b);
        ctx.translate(0.5, 0.5);
    }
};

on('#app', ['dragover', 'drop'], (evt: DragEvent) => {
    evt.preventDefault();

    if (evt.type === 'drop') {
        const file = evt.dataTransfer?.files?.[0];
        if (file) {
            renderer = new SpectrumRenderer(file, {
                width,
                height,
                maxDecibels: MAX_DECIBELS,
                minDecibels: MIN_DECIBELS
            });

            renderGraph().then(renderUI);
        }
    }
});

window.addEventListener('resize', debounce(renderGraph, 250));
window.addEventListener('resize', () => {
    resize();
    renderUI();
});

resize();
renderUI();
