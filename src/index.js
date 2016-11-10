var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;


var store = require('./store');
var App = require('./components/App');
//var Game = require('./components/Game');
//wrapping App component in Provider allows our App to access parts of the store
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render (
     <Provider store={store}>
       <App />
     </Provider>,
     document.getElementById('root')
   );

});
