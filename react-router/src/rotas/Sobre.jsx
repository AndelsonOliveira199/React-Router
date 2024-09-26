import NavBar from "../Componentes/NavBar";
import { useState } from "react";
import 'material-icons/css/material-icons.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';

const Sobre = () => {

  const [numero, setNumero] = useState(0);

  const incrementCount = () => {
    setNumero(numero + 1);
  }

  const decrementCount = () => {
    setNumero(numero - 1);
  }

  return (
    <div>
        <NavBar />
      <div className="row">
        <div className="col s12">
          <div className="col m3 l5 offset-l4 sobre">
            <h1>{numero}</h1>
            <button className="btn blue btn-large waves-effect" onClick={incrementCount}>Incrementar Número</button>
            <br /><br />
            <button className="btn red btn-large waves-effect" onClick={decrementCount}>Reduzir Números</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre
