import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import appStore, { store } from './redux/store';
import App from './App';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>
);