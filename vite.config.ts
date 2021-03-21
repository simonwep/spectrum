import {resolve} from 'path';
import {defineConfig} from 'vite';
import {minifyHtml} from 'vite-plugin-html';
import {VitePWA} from 'vite-plugin-pwa';
import manifest from './src/manifest.json';

export default defineConfig({
    esbuild: {
        target: 'esnext'
    },

    resolve: {
        alias: {
            '@utils': resolve('./src/utils'),
            '@audio': resolve('./src/audio')
        }
    },

    plugins: [
        minifyHtml(),
        VitePWA({
            manifest
        })
    ]
});
