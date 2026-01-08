export function loadModules() {
  const modules = [
    // include paths to the built module files
    '/../neurons.me/modules/npmjs/dist/neurons.me.es.js',
    '/../../../cleaker.me/modules/npmjs/dist/cleaker.es.js',
    '/../../../all.this/this/me/npmjs/dist/me.es.js',
    '/../../../all.this/this/GUI/npmjs/dist/GUI.es.js',
    '/../../../all.this/this/wallet/npmjs/dist/wallet.es.js',
    '/../../../all.this/this/DOM/npmjs/dist/DOM.es.js',
    '/../../../all.this/this/url/npmjs/dist/url.es.js',
    '/../../../all.this/this/env/npmjs/dist/env.es.js',
    '/../../../all.this/this/img/npmjs/dist/img.es.js',
    '/../../../all.this/this/audio/npmjs/dist/audio.es.js',
    '/../../../Tetragrammaton/modules/npmjs/dist/tetragrammaton.es.js',
    '/../../../Tetragrammaton/monad.ai/npmjs/dist/monad_ai.es.js',
    // etc.
  ];

  modules.forEach(path => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = path;
    document.head.appendChild(script);
  });
}