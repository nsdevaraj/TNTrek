import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-assets',
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: 'tracks.json',
          source: require('fs').readFileSync('tracks.json', 'utf-8')
        });
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});
