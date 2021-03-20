import {autoSizeCanvas} from '@utils/autoSizeCanvas';
import {on} from '@utils/events';
import {renderSpectrum} from '@utils/renderSpectrum';
import './styles/_index.scss';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
autoSizeCanvas(canvas);

const render = async (file: Blob) => {
    const start = performance.now();
    const spectrum = await renderSpectrum(file, {
        width: canvas.width,
        height: canvas.height
    });

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.drawImage(spectrum, 0, 0, canvas.width, canvas.height);
    ctx.translate(0.5, 0.5);
    console.log(`Done, took ${Math.floor(performance.now() - start)}ms`);
};

on('#app', ['dragover', 'drop'], (evt: DragEvent) => {
    evt.preventDefault();

    if (evt.type === 'drop') {
        const file = evt.dataTransfer?.files?.[0];
        file && render(file);
    }
});

fetch('/ad.mp3')
    .then(res => res.blob())
    .then(render);
