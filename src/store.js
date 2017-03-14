import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import { LOGIN_USER_SUCCESS } from './actions/types';

import rootReducer from './reducers';

const logger = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

const token = localStorage.getItem('token');

if(token) {
  store.dispatch({ type: LOGIN_USER_SUCCESS })
}

export default store;
