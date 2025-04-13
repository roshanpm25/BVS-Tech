import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Make sure the output directory is 'dist'
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Proxy API requests to your backend
    },
  },
});
