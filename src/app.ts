import {autoSizeCanvas} from '@utils/autoSizeCanvas';
import {on} from '@utils/events';
import {SpectrumRenderer} from '@utils/SpectrumRenderer';
import {debounce} from 'debounce';
import './styles/_index.scss';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
autoSizeCanvas(canvas);

const consume = async (file: Blob) => {
    const renderer = new SpectrumRenderer({
        width: canvas.width,
        height: canvas.height
    }, file);

    const render = async () => {
        const start = performance.now();
        const spectrum = await renderer.render();
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        ctx.drawImage(spectrum, 0, 0, canvas.width, canvas.height);
        ctx.translate(0.5, 0.5);
        console.log(`Done, took ${Math.floor(performance.now() - start)}ms`);
    };

    window.addEventListener('resize', debounce(render, 250));
    return render();
};

on('#app', ['dragover', 'drop'], (evt: DragEvent) => {
    evt.preventDefault();

    if (evt.type === 'drop') {
        const file = evt.dataTransfer?.files?.[0];
        file && consume(file);
    }
});
