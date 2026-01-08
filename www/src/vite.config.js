import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        cleaker: path.resolve(__dirname, "www/src/cleaker/index.js"),
        netget: path.resolve(__dirname, "www/src/netget/index.js"),
        mlearning_studio: path.resolve(__dirname, "www/src/mlearning/studio/index.js"),
        mlearning_me: path.resolve(__dirname, "www/src/mlearning/me/index.js"),
        polls_studio: path.resolve(__dirname, "www/src/polls/studio/index.js"),
        _me: path.resolve(__dirname, "www/src/this/me/index.js"),
        _GUI: path.resolve(__dirname, "www/src/this/GUI/index.js"),
        _wallet: path.resolve(__dirname, "www/src/this/wallet/index.js"),
        _DOM: path.resolve(__dirname, "www/src/this/DOM/index.js"),
        _url: path.resolve(__dirname, "www/src/this/url/index.js"),
        _env: path.resolve(__dirname, "www/src/this/env/index.js"),
        _img: path.resolve(__dirname, "www/src/this/img/index.js"),
        _audio: path.resolve(__dirname, "www/src/this/audio/index.js"),
        tetragrammaton: path.resolve(__dirname, "www/src/Tetragrammaton/index.js"),
        monad_ai: path.resolve(__dirname, "www/src/monad.ai/index.js"),
      },

      output: {
        entryFileNames: chunk => {
          return `${chunk.name}/dist/browser.js`;
        },
        chunkFileNames: chunk => {
          return `${chunk.name}/dist/chunk-[hash].js`;
        },
        assetFileNames: chunk => {
          return `${chunk.name}/dist/[name].[ext]`;
        }
      }
    }
  }
});