import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n';
import { GUI } from 'all.this';
const { GUIProvider } = GUI;
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <GUIProvider>
  <App />
  </GUIProvider>
  </StrictMode>
);
