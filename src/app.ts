import {SpectrumRenderer} from '@audio/SpectrumRenderer';
import {renderSkeleton} from '@renderer/renderSkeleton';
import {renderSpectrum} from '@renderer/renderSpectrum';
import {downloadBlob} from '@utils/downloadBlob';
import {on} from '@utils/events';
import {realSize} from '@utils/realSize';
import {debounce} from 'debounce';
import './styles/_index.scss';

// Canvas, context and spectrum renderer
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d', {
    alpha: false
}) as CanvasRenderingContext2D;

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
        graphMargin: [40, 100, 35, 65],
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

const drawSpectrumThrotteled = debounce(drawSpectrum, 250);

const resetApp = () => {
    renderer = undefined;
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawUserInterface();
};

const resizeCanvas = () => {
    const {width, height} = realSize(canvas);
    canvas.width = width;
    canvas.height = height;
    drawUserInterface();
};

const downloadSpectrum = (spectrumOnly?: boolean) => {
    if (renderer?.canvas) {
        const filename = renderer.file.name
            .replace(/\W+/g, '-')
            .replace(/\.[^.]+$/, '');

        (spectrumOnly ? renderer?.canvas : canvas).toBlob(blob => {
            blob && downloadBlob(blob, `spectrum-${filename}.png`);
        }, 'image/png');
    }
};

const redraw = (): void => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    void drawSpectrumThrotteled();
    void drawUserInterface();
};

const toggleHelpScreen = () => document.getElementById('help')?.classList.toggle('visible');

// Wait for files
on('#canvas', ['dragover', 'drop'], (evt: DragEvent) => {
    evt.preventDefault();

    if (!evt.dataTransfer) {
        return;
    }

    // Show copy icon for this data-transfer
    evt.dataTransfer.dropEffect = 'copy';

    // React to when a file is dropped
    if (evt.type === 'drop') {
        const file = evt.dataTransfer.files?.[0];

        if (file) {
            resetApp();

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

// Shortcuts
on(window, 'keydown', (evt: KeyboardEvent) => {
    if (evt.ctrlKey || evt.metaKey) {
        evt.preventDefault();

        switch (evt.code) {
            case 'KeyS': {
                return downloadSpectrum(evt.shiftKey);
            }
            case 'ArrowUp': {
                config.analyzer[evt.shiftKey ? 'minDecibels' : 'maxDecibels'] += 1;
                return redraw();
            }
            case 'ArrowDown': {
                config.analyzer[evt.shiftKey ? 'minDecibels' : 'maxDecibels'] -= 1;
                return redraw();
            }
        }
    } else {
        switch (evt.code) {
            case 'KeyF': {
                document.getElementById('header')?.classList.toggle('visible');
                resizeCanvas();
                return drawSpectrumThrotteled();
            }
            case 'KeyH': {
                toggleHelpScreen();
                return;
            }
        }
    }
});

// React to browser changes
window.addEventListener('resize', drawSpectrumThrotteled);
window.addEventListener('resize', resizeCanvas);

// Buttons
document.getElementById('help-screen-btn')?.addEventListener('click', toggleHelpScreen);
document.getElementById('help')?.addEventListener('click', toggleHelpScreen);

// Initial resize and draw
resizeCanvas();
