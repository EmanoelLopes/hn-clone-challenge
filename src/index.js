import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../src/assets/styles/index.scss';
import App from './containers/App';
import store from './store';
import * as serviceWorker from './serviceWorker';

const ROOT = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  ROOT
);

/*  
  enanble Service Worker. 
  To disable it just change serviceWorker.register() method to serviceWorker.unregister()
*/
serviceWorker.register();
