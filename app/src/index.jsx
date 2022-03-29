import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from './feature/index';
import  AppWrapper  from './routes'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <AppWrapper/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
