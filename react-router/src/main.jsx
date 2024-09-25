import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './routes/Dashboard.jsx'
import Contactos from './routes/Contactos.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/dashboard", element: <Dashboard />},
  {path: "/contactos", element: <Contactos />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
