import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"
import { PacientesContextProvider } from './context/PacientesContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PacientesContextProvider>
    <App />
    </PacientesContextProvider>
  </React.StrictMode>
)
