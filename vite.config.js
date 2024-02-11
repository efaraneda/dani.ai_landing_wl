import { defineConfig } from 'vite'
import reactSWC from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: { host: true, port:8080},
  plugins: [
    reactSWC()
  ]
})
