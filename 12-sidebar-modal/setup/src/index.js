import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {AppProvider} from './context'
import App from './App'
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
  <App />
      </AppProvider> {/*does app component inherit from the appProvider component */}
  </React.StrictMode>,
  document.getElementById('root')
)
