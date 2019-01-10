import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import App from './containers/app';
import theme from './utils/theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import 'sanitize.css/sanitize.css';
import './index.css';

const MOUNT_NODE = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE
)
