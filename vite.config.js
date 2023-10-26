import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

import { dependencies } from './package.json';

// https://sambitsahoo.com/blog/vite-code-splitting-that-works.html
const renderChunks = (deps) =>{
    let chunks = {};
    Object.keys(deps).forEach((key) => {
        chunks[key] = [key];
    });
    return chunks;
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const { VITE_BASENAME } = env;

    const config = {
        plugins: [react()],
        base: VITE_BASENAME,
        build: {
            sourcemap: false ,
            rollupOptions: {
                output: {
                    manualChunks: {
                        ...renderChunks(dependencies),
                    },
                },
            },
        },
    };

    if (command !== 'serve') {
        config.base = VITE_BASENAME;
    }

    return config;
});
