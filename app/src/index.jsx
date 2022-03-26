import React from 'react';
import ReactDOM from 'react-dom';
import Home from './templates/Home';
import { Provider } from "react-redux";
import { store } from '../feature/index';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <Home/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
