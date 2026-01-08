import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import path from 'node:path';
export default defineConfig({
  plugins: [react(), mdx()],
  resolve: {
    alias: {
      'all.this': path.resolve(__dirname, './src/lib/all-this.js'),
    },
  },
  server: {
    port: 8234,
    fs: {
      allow: ['..'],
    },
  },
});
