import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
//@.neurons.me
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mdx()],
  server: {
    port: 8234, // Replace with your desired port number
  },
});