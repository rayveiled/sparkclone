import React from 'react'
import ReactGA from 'react-ga'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/scss/bootstrap.scss'
import './index.scss'
import getDefaultState from './helpers/dataMigration'
import App from './components/App'
import rootReducer from './reducers'

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : getDefaultState()
const store = createStore(rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'))
ReactGA.initialize('UA-101216558-2', { debug: true })
serviceWorker.register()
