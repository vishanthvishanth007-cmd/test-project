import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import Myrouter from './Myrouter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Myrouter />
    </BrowserRouter>
  </StrictMode>,
)
