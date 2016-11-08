//the store keeps hold of the state, and allows us to dispatch actions
//adding the middleware Redux Thunk allows us to create async actions
var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;

var reducers = require('./reducers/reducers');

var store = createStore(reducers.reducers, applyMiddleware(thunk));

module.exports = store;
