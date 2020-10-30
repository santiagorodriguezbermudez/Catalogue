import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './components/App';
import combinedReducers from './reducers/index';
import './index.css';

require('dotenv').config();

const store = createStore(combinedReducers, {
  stocks: [],
}, applyMiddleware(thunk));

store.subscribe(() => {
  console.log('state updated', store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
