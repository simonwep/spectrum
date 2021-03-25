import {resolve} from 'path';
import {defineConfig} from 'vite';
import {minifyHtml} from 'vite-plugin-html';
import {VitePWA} from 'vite-plugin-pwa';
import manifest from './manifest.json';
import pkg from './package.json';

export default defineConfig({
    esbuild: {
        target: 'esnext'
    },

    define: {
        'env.VERSION': JSON.stringify(pkg.version)
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
            manifest
        })
    ]
});
