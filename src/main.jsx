import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');

// guard against HMR re‑runs
if (!window.__root) {
  window.__root = createRoot(container);
}

window.__root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
