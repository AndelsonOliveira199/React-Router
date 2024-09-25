import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sobre from './routes/Sobre.jsx'
import Contactos from './routes/Contactos.jsx'
import Comprar from './routes/Comprar.jsx'
import Login from './routes/Login.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/sobre", element: <Sobre />},
  {path: "/contactos", element: <Contactos />},
  {path: "/comprar", element: <Comprar />},
  {path: "/login", element: <Login />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
