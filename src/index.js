import React from 'react';
import ReactDOM from 'react-dom';
import Home from './templates/Home/Index';
import { GlobalStyle } from './global-styles'
import { OverviewContext } from './context/OverviewContext'


ReactDOM.render(
  <React.StrictMode>
    <OverviewContext>
        <Home />
      <GlobalStyle/>
    </OverviewContext>
  </React.StrictMode>,
  document.getElementById('root')
);

