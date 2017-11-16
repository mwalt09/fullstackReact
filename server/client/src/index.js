// Data layer control - Redux

import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


import App from './components/App';
import reducers from './reducers';


// This sets up our Redux Store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


// 'Provider' tag is a React component that is provided by the React-Redux library
// 'Provider' component is the bridge between React and Redux
// 'Provider' is a component that makes the store accessible to every component in the app
// 'Provider' component knows how to read changes from the Redux Store
// 'Provider' will inform / update all of its children components of state changes
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);
