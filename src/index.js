import React from 'react';
import ReactDOM from 'react-dom';
import Home from './templates/Home/Index';
import { GlobalStyle } from './global-styles'


ReactDOM.render(
  <React.StrictMode>
      <Home />
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);

