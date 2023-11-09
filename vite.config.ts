import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { imagetools } from 'vite-imagetools';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    // if error go to typings.d.ts
    imagetools(),
    /* pass your config */
    ViteImageOptimizer({
      /* pass your config */
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
