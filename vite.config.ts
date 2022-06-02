import {defineConfig} from 'vite';
import {createHtmlPlugin} from 'vite-plugin-html';
import {VitePWA} from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';
import manifest from './manifest.json';

export default defineConfig({
    base: '',

    esbuild: {
        target: 'esnext'
    },

    define: {
        'env.BUILD_TIMESTAMP': JSON.stringify(Date.now())
    },

    server: {
        port: 3005
    },

    plugins: [
        tsconfigPaths({loose: true}),
        createHtmlPlugin(),
        VitePWA({
            registerType: 'autoUpdate',
            strategies: 'generateSW',
            base: './',
            manifest
        })
    ]
});
