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
                  <p>Primeiro artigo</p>
                </div>
              </div>
            </article>
            <article className="col s12 m3 l4">
              <div className="card z-depth-0">
                <div className="card-image">
                  <img src={imagens.card02} alt="" />
                </div>
                <div className="card-content">
                  <p>Segundo artigo</p>
                </div>
              </div>
            </article>
            <article className="col s12 m3 l4">
              <div className="card z-depth-0">
                <div className="card-image">
                  <img src={imagens.card03} alt="" />
                </div>
                <div className="card-content">
                  <p>Terceiro artigo</p>
                </div>
              </div>
            </article>
          </div>
        </div>
    </div>
  )
}

export default Cards
