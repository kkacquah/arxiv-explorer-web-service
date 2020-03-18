import ReactDOM from 'react-dom';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import HttpsRedirect from 'react-https-redirect'
import theme from './theme';
import App from './App';
import Favicon from 'react-favicon';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

//configure environment variables
require('dotenv').config();

ReactDOM.render(
  <HttpsRedirect>
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App/>

  </ThemeProvider>
  </HttpsRedirect>,
  document.querySelector('#root'),
);
