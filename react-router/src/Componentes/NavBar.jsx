import { Link } from "react-router-dom"
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'material-icons/iconfont/filled.css'
import {useEffect} from 'react'
import './NavBar.css'
import { imagens } from "../assets/imagens"

const NavBar = () => {

    useEffect(() => {
    
        const M = window.M; // Certifique-se de que Materialize está disponível no escopo global
        const sidenavElems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenavElems); 
    
      }, []);

  return (
    <>
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper container">
          <Link title="Bakery-Produções" to="/" className="brand-logo"><img src={imagens.Logo01} alt="" /></Link>
          {/* Ícone para abrir o sidenav no mobile */}
          <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
          {/* Menu para desktop */}
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li title="Início"><Link to="/" className="z-depth-0"><i className="material-icons left">home</i> Início</Link></li>
            <li title="Sobre Nós"><Link to="/sobre" className="z-depth-0"><i className="material-icons left">description</i> Sobre Nós</Link></li>
            <li title="Adicionar Produtos"><Link to="/comprar" className="z-depth-0"><i className="material-icons left">add_shopping_cart</i> Ocupar Fila</Link></li>
            <li title="Fale Conosco"><Link to="/contactos" className="z-depth-0"><i className="material-icons left">phone</i> Fale Conosco</Link></li>
            <li title="Login In"><Link to="/login" className="btn btn-floating red z-depth-0 pulse"><i className="material-icons left">lock</i></Link></li>
          </ul>
        </div>
      </nav>
    </div>

    {/* Menu Sidenav para dispositivos móveis */}
    <ul id="mobile-demo" className="sidenav">
      <li><Link to="/"><i className="material-icons left">home</i> Início</Link></li>
      <li><Link to="/sobre"><i className="material-icons left">description</i> Sobre Nós</Link></li>
      <li><Link to="/comprar"><i className="material-icons left">add_shopping_cart</i> Ocupar Fila</Link></li>
      <li><Link to="/contactos"><i className="material-icons left">phone</i> Fale Conosco</Link></li>
      <li><Link to="/login"><i className="material-icons left">https</i> Login In</Link></li>
    </ul>
  </>
  )
}

export default NavBar
