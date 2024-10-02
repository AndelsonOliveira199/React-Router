import './Cards.css'
import { imagens } from '../assets/imagens';

const Cards = () => {
  return (
    <div className="container">
      <div className="row">
          <div className="col s12">
            <article className="col s12 m3 l4">
              <div className="card z-depth-0">
                <div className="card-image">
                  <img src={imagens.card01} alt="" />
                </div>
                <div className="card-content">
                  <p>Descrição - Pão Itáliano</p>
                  <p>Preço - 25,00 AOA</p>
                </div>
              </div>
            </article>
            <article className="col s12 m3 l4">
              <div className="card z-depth-0">
                <div className="card-image">
                  <img src={imagens.card02} alt="" />
                </div>
                <div className="card-content">
                  <p>Descrição - Pão Português</p>
                  <p>Preço - 50,00 AOA</p>
                </div>
              </div>
            </article>
            <article className="col s12 m3 l4">
              <div className="card z-depth-0">
                <div className="card-image">
                  <img src={imagens.card03} alt="" />
                </div>
                <div className="card-content">
                  <p>Descrição - Pão Americano</p>
                  <p>Preço - 100,00 AOA</p>
                </div>
              </div>
            </article>
          </div>
        </div>
    </div>
  )
}

export default Cards
