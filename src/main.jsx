import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { options } from './utils/toastConfig.js'
import  AuthProvider  from './context/AuthContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
          <Toaster position="top-left" toastOptions={options} duration={3000} />
          <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
