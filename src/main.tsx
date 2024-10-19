import {StrictMode} from 'react';
import {Provider} from 'react-redux';
import {createRoot} from 'react-dom/client';

import {App} from './modules/app/components';

import './index.css';

import {store} from './store/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>,
);
