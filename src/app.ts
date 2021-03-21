import {SpectrumRenderer} from '@audio/SpectrumRenderer';
import {renderSkeleton} from '@renderer/renderSkeleton';
import {renderSpectrum} from '@renderer/renderSpectrum';
import {on} from '@utils/events';
import {realSize} from '@utils/realSize';
import {debounce} from 'debounce';
import './styles/_index.scss';

// Canvas, context and spectrum renderer
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d') as CanvasRenderingContext2D;
let renderer: SpectrumRenderer | undefined;

// Configuration
export type Configuration = typeof config;
const config = {

    // Analyzer options
    analyzer: {
        minDecibels: -120,
        maxDecibels: -20
    },

    // Visual options
    visuals: {
        graphMargin: [35, 100, 35, 65],
        decibelBarWidth: 10,
        tickMinDistance: 50,
        tickThickness: 1,
        tickLength: 10
    }
};

// Main functions
const drawUserInterface = () =>
    renderSkeleton({renderer, context, config});

const drawSpectrum = async () => renderer &&
    renderSpectrum({renderer, context, config});

const resizeCanvas = () => {
    Object.assign(canvas, realSize(canvas));
    drawUserInterface();
};

// Wait for files
on('#app', ['dragover', 'drop'], (evt: DragEvent) => {
    evt.preventDefault();

    if (evt.type === 'drop') {
        const file = evt.dataTransfer?.files?.[0];

        if (file) {
            renderer = new SpectrumRenderer(file, {
                width: screen.availWidth,
                height: screen.availHeight,
                maxDecibels: config.analyzer.maxDecibels,
                minDecibels: config.analyzer.minDecibels
            });

            drawSpectrum().then(drawUserInterface);
        }
    }
});

// React to browser changes
window.addEventListener('resize', debounce(drawSpectrum, 250));
window.addEventListener('resize', resizeCanvas);

// Initial resize and draw
resizeCanvas();
