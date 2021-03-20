import {resolve} from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
    esbuild: {
        target: 'esnext'
    },

    resolve: {
        alias: {
            '@utils': resolve('./src/utils')
        }
    }
});
