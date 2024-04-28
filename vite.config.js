import { defineConfig } from 'vite';
import reactSWC from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: { host: true, port: 8080 },
  plugins: [
    reactSWC()
  ],
  build: {
    chunkSizeWarningLimit: 2000, // Set a custom chunk size warning limit (in KB)
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Customize manual chunking as needed
        },
      },
    },
  },
});
