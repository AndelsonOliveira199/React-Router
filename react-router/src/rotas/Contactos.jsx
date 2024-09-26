import NavBar from "../Componentes/NavBar"
import './Contactos.css'
import { imagens } from "../assets/imagens"

const Contactos = () => {
  return (
    <div>
        <NavBar />
      <div className="row">
      <div className="col s12">
          <div className="col m3 l3 offset-l4 contactos">
            <div className="card-panel">
              <div className="chip">
                <img src={imagens.linkedin} alt="Contact Person" />
                <span className="texto">react-router-linkedin</span>
              </div>
              <div className="chip">
                <img src={imagens.twitter} alt="Contact Person" />
                <span className="texto">react-router-@twitter</span>
              </div>
              <div className="chip">
                <img src={imagens.insta} alt="Contact Person" />
                <span className="texto">react-router-instagra</span>
              </div>
              <div className="chip">
                <img src={imagens.gmail} alt="Contact Person" />
                <span className="texto">react-router-g-mail</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactos
