import "./App.css";
// import { imagens } from './assets/imagens';
import NavBar from "./Componentes/NavBar";
import { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import { imagens } from "./assets/imagens";

function App() {
  useEffect(() => {
    const M = window.M; // Certifique-se de que Materialize está disponível no escopo global
    const instance = document.querySelectorAll(".carousel .carousel-slider");
    M.Carousel.init({ instance, fullWidth: true });
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col s12">
            <article className="col s12 m3 l4">
              <div className="card">
                <div className="card-image">
                  <img src={imagens.slide02} alt="" />
                </div>
                <div className="card-content">
                  <p>Primeiro artigo</p>
                </div>
              </div>
            </article>
            <article className="col s12 m3 l4">
              <div className="card">
                <div className="card-image">
                  <img src={imagens.slide02} alt="" />
                </div>
                <div className="card-content">
                  <p>Primeiro artigo</p>
                </div>
              </div>
            </article>
            <article className="col s12 m3 l4">
              <div className="card">
                <div className="card-image">
                  <img src={imagens.slide02} alt="" />
                </div>
                <div className="card-content">
                  <p>Primeiro artigo</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
