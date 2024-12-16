import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Ensure Vite uses relative paths
  build: {
    outDir: 'dist', // This ensures Vite builds into the 'dist' folder
  },
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'https://react-job-anz2.onrender.com', // Use VITE_API_URL for local dev and production
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});