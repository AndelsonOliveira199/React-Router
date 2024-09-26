import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sobre from './rotas/Sobre.jsx'
import Contactos from './rotas/Contactos.jsx'
import Comprar from './rotas/Comprar.jsx'
import Login from './rotas/Login.jsx'
import Dashboard from './Componentes/Dashboard/Dashboard.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/sobre", element: <Sobre />},
  {path: "/contactos", element: <Contactos />},
  {path: "/comprar", element: <Comprar />},
  {path: "/login", element: <Login />},
  {path: "/dashboard", element: <Dashboard />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
