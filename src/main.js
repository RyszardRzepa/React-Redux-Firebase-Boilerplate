import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import store from './store';
import router from './router';
import history from './history';
import { LOGIN_USER_SUCCESS } from './actions/types';

let routes = require('./routes.json').default; // Loaded with utils/routes-loader.js

const container = document.getElementById('container');

const config = {
  apiKey: "AIzaSyCsruSl5Su_tqEfdY8RuqRl54QgWVoacEA",
  authDomain: "reactnative-auth-fdfb4.firebaseapp.com",
  databaseURL: "https://reactnative-auth-fdfb4.firebaseio.com",
  storageBucket: "reactnative-auth-fdfb4.appspot.com",
  messagingSenderId: "177624070215"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged((user) => store.dispatch({ type: LOGIN_USER_SUCCESS, payload: user }));

function renderComponent(component) {
  ReactDOM.render(<Provider store={store}>{component}</Provider>, container);
}

// Find and render a web page matching the current URL path,
// if such page is not found then render an error page (see routes.json, core/router.js)
function render(location) {
  router.resolve(routes, location)
    .then(renderComponent)
    .catch(error => router.resolve(routes, { ...location, error }).then(renderComponent));
}

// Handle client-side navigation by using HTML5 History API
// For more information visit https://github.com/ReactJSTraining/history/tree/master/docs#readme
history.listen(render);
render(history.location);

// Eliminates the 300ms delay between a physical tap
// and the firing of a click event on mobile browsers
// https://github.com/ftlabs/fastclick
FastClick.attach(document.body);

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept('./routes.json', () => {
    routes = require('./routes.json').default; // eslint-disable-line global-require
    render(history.location);
  });
}
