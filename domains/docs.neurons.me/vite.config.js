import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//docs.neurons.me
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8235, // Replace with your desired port number
  },
});