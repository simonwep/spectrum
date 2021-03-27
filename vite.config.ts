import {resolve} from 'path';
import {defineConfig} from 'vite';
import {minifyHtml} from 'vite-plugin-html';
import {VitePWA} from 'vite-plugin-pwa';
import manifest from './manifest.json';

export default defineConfig({
    base: '',

    esbuild: {
        target: 'esnext'
    },

    define: {
        'env.BUILD_TIMESTAMP': JSON.stringify(Date.now())
    },

    resolve: {
        alias: {
            '@utils': resolve('./src/utils'),
            '@audio': resolve('./src/audio'),
            '@renderer': resolve('./src/renderer')
        }
    },

    plugins: [
        minifyHtml(),
        VitePWA({
            registerType: 'autoUpdate',
            strategies: 'generateSW',
            base: './',
            manifest
        })
    ]
});
