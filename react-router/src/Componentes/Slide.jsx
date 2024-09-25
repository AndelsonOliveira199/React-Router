import {useEffect} from 'react'
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import { imagens } from "../assets/imagens";

const Slide = () => {

    useEffect(() => {
        const M = window.M; // Certifique-se de que Materialize está disponível no escopo global
        const elems = document.querySelectorAll(".slider");
        M.Slider.init(elems, {indicators: false});
      }, []);

  return (
    <div className="slider">
        <ul className="slides">
          <li>
            <img src={imagens.card01} />
            <div className="caption center-align">
              <h3>Saudações!</h3>
              <h5 className="light grey-text text-lighten-3">Prepare-se para uma jornada de progresso e conquista. Estamos aqui para ajudar você em cada etapa da sua jornada.</h5>
            </div>
          </li>
          <li>
            <img src={imagens.card02} />
            <div className="caption left-align">
              <h3>Saudações da React-Router!</h3>
              <h5 className="light grey-text text-lighten-3">Estamos aqui para tornar sua vida mais fácil. Descubra nossas soluções eficientes e simplifique suas tarefas diárias..</h5>
            </div>
          </li>
          <li>
            <img src={imagens.card03} />
            <div className="caption right-align">
              <h3>Right Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">Bem-vindo, amante da gastronomia! Desfrute de uma experiência gastronômica como nenhuma outra. Descubra sabores que irão aguçar seus sentidos.</h5>
            </div>
          </li>
        </ul>
      </div>
  )
}

export default Slide
