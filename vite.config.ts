import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; 

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
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        tracks: './tracks.json'
      }
    }
  }
});
