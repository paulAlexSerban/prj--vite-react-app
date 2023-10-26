import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const { VITE_BASENAME } = process.env;

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    const config = {
        plugins: [react()],
        base: VITE_BASENAME,
    };

    if (command !== 'serve') {
        config.base = VITE_BASENAME;
    }

    return config;
});
