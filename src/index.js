import React from 'react';
import ReactDOM from 'react-dom';
// components
import App from './App';
// tools
import { BrowserRouter as Router } from 'react-router-dom';
// state
import { Provider } from 'react-redux';
import store from './app/store'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);