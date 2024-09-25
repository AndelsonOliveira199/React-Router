import { Link } from "react-router-dom"
import M from "materialize-css"

const NavBar = () => {
  return (
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/dashboard">Dashboard</Link>
      </p>
      <p>
        <Link to="/contactos">Contactos</Link>
      </p>
    </div>
  )
}

export default NavBar
