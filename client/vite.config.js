import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Manually load .env and .env.production files
dotenv.config({ path: '../.env' }); // Path to the .env file outside the client directory
dotenv.config({ path: '../.env.production' }); // Path to the .env.production file

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
        target: process.env.VITE_API_URL || 'https://react-job-anz2.onrender.com', // Use VITE_API_URL for local dev and production
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
