import './App.css'
import { imagens } from './assets/imagens';
import NavBar from './Componentes/NavBar'
import {useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'

function App() {

  useEffect(() => {
    
    const M = window.M; // Certifique-se de que Materialize está disponível no escopo global
    const instance  = document.querySelectorAll('.carousel .carousel-slider');
    M.Carousel.init({instance, fullWidth: true}); 
  }, []);

  return (
    <>
      <NavBar />
      <div className="carousel carousel-slider">
        <a className="carousel-item"><img src={imagens.slide01} /></a>
        <a className="carousel-item"><img src={imagens.slide02} /></a>
      </div>
    </>
  )
}

export default App
