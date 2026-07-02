import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        // Keep the animation libs in their own chunks so the initial bundle
        // stays light and parses fast.
        manualChunks: {
          motion: ['framer-motion'],
          gsap: ['gsap'],
        },
      },
    },
  },
});
