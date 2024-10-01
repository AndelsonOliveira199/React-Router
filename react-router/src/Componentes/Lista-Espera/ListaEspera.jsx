// import React, { useState } from 'react'
import './ListaEspera.css'
import Comentarios from '../Comentarios/Comentarios';
import { Link } from 'react-router-dom';

const ListaEspera = () => {

        const M = window.M; // Certifique-se de que Materialize está disponível no escopo global
        const instance = document.querySelectorAll('.tabs');
          M.Tabs.init(instance, {}); 

  // var instance = M.Tabs.init(el, options);

  // const [estado setEstado] = useState({});

  return (
    <div>
      <div className="row">
        <div className="col s12">
          <div className="container">
            <ul className="tabs">
                <li className="tab col s3"><Link className='active' to="#test1">Lista de Espera</Link></li>
                <li className="tab col s3"><Link to="#test2">Prioridade</Link></li>
                <li className="tab col s3"><Link to="#test3">Atendidos</Link></li>
                <li className="tab col s3"><Link to="#test4">Deixe seu comentário</Link></li>
              </ul>
            </div>
            <div id="test1" className="col s12">
              <div className="container">
                <h5>Lista de clientes que esperam ser atendidos</h5>
              </div>
            </div>
            <div id="test2" className="col s12">
              <div className="container">
                <h5>Lista de Prioridade</h5>
              </div>
            </div>
            <div id="test3" className="col s12">
              <div className="container">
                <h5>Lista de clientes que já foram atendidos</h5>
              </div>
            </div>
            <div id="test4" className="col s12">
              <div className="container">
                <h5>A sua sugestão é importante para o nosso crescimento</h5>
                <Comentarios />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ListaEspera
