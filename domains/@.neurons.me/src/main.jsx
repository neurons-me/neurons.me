import { Fragment, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n';
import '../../../this/GUI/npm/dist/styles.css';
import '../../../this/GUI/npm/dist/material-symbols.css';
import { GUI } from 'all.this';
import App from './App.jsx';
const RootProvider = GUI.Theme ?? GUI.GuiProvider ?? GUI.GUIProvider ?? Fragment;
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RootProvider>
  <App />
  </RootProvider>
  </StrictMode>
);
