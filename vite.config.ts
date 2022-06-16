import preact from '@preact/preset-vite';
import {VitePWA} from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';
import {defineConfig} from 'vite';
import manifest from './public/manifest.json';

export default defineConfig({
    esbuild: {
        target: 'esnext',
        jsxInject: '',
        jsxFactory: 'preact',
        jsxFragment: 'Fragment'
    },

    define: {
        'env.BUILD_TIMESTAMP': JSON.stringify(Date.now())
    },

    server: {
        port: 3005
    },

    plugins: [
        preact(),
        tsconfigPaths({loose: true}),
        VitePWA({
            registerType: 'autoUpdate',
            strategies: 'generateSW',
            base: './',
            manifest
        })
    ]
});
