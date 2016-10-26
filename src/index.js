import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/reducers'
import App from './App'

//all the states are stored in the store, wrapping main App with Provider
//component links the react components to the store
let store = createStore(reducers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
