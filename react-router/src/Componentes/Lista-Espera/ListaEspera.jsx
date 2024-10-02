// import React, { useState } from 'react'
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import "material-icons/iconfont/material-icons.css"
import './ListaEspera.css'
import Comentarios from '../Comentarios/Comentarios';
// import { Link } from 'react-router-dom';

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
                <li className="tab col s3"><a className='active' href="#test1"><i className="material-icons">face</i> Lista de Espera</a></li>
                <li className="tab col s3"><a href="#test2">Prioridade</a></li>
                <li className="tab col s3"><a href="#test3">Atendidos</a></li>
                <li className="tab col s3"><a href="#test4">Deixe seu comentário</a></li>
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
