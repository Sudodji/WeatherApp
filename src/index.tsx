import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppWrapper } from './App';
import store from './store/store';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <AppWrapper />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
