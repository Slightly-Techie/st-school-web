import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { options } from './utils/toastConfig.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster position="bottom-right" toastOptions={options} duration={3000} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
