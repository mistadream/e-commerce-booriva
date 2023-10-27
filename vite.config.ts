import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    /* pass your config */
    ViteImageOptimizer({
      /* pass your config */
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
