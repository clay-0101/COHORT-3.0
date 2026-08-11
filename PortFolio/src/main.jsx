import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyRoute from './Routes/MyRoute.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyRoute/>
  </StrictMode>,
)
