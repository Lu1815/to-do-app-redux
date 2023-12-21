import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './App/redux/Index'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom';
import { router } from './App/routes/Index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
