import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { store } from './store';
import './index.scss';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppRoutes/>
      </Provider> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

