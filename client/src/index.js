import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import './stylesheets/index.css';
import App from './components/App';
import rootReducer from './reducers';
import { getArticles } from './actions';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk, logger];

const store = createStore(rootReducer, 
  composeWithDevTools(applyMiddleware(...middleware))

);

store.dispatch(getArticles());


ReactDOM.render(
  <Provider store={store}>
      <App />     
  </Provider>,
  document.getElementById('root'));
