import { Link } from "react-router-dom"
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import 'material-icons/iconfont/filled.css'
import {useEffect} from 'react'
import './NavBar.css'

const NavBar = () => {

    useEffect(() => {
    
        const M = window.M; // Certifique-se de que Materialize está disponível no escopo global
        const sidenavElems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenavElems); 
    
      }, []);

  return (
    <div>

        <nav>
            <div className="nav-wrapper container">
            <Link to="/" className="brand-logo">React-Router</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/"> <i className="material-icons left">home</i> Home</Link></li>
                    <li><Link to="/dashboard"> <i className="material-icons left">dashboard</i> Dashboard</Link></li>
                    <li><Link to="/contactos"> <i className="material-icons left">phone</i> Contactos</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
