// import React from 'react'
import './Comentarios.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import 'material-icons/iconfont/filled.css'
import { useState } from 'react'
// import { imagens } from '../../assets/imagens'
// import { useState } from 'react'

const Comentarios = () => {

    // const [comentarios, setComentarios] = useState("Comentário 2");
    // const Enviar_comentario = () =>{
    //     setComentarios.toString.call();
    // }

    const [muito_satisfeito, setMuito_satisfeito] = useState('');
    setMuito_satisfeito.toString(muito_satisfeito);

  return (
    <div>
      <div className="row">
        <div className="col s12">
            <article className="col m6 l5 right">
            <h6>A sua sugestão é importante para o nosso crescimento, click em um dos botões para expressar sua reação</h6>
                <p> 
                  <button id='muito_satisfeito' name='muito_satisfeito' title='Muito Satisfeito(a)' className="btn pulse btn-large btn-floating green white-text"><i className="material-icons">sentiment_very_satisfied</i></button>
                  <button name='razuavel' title='Razuável' className="btn btn-large btn-floating yellow white-text"><i className="material-icons grey-text">sentiment_satisfied</i></button>  
                  <button name='insatisfeito' title='Insatisfeito(a)' className="btn btn-large btn-floating red white-text"><i className="material-icons">sentiment_very_dissatisfied</i></button> 
                </p>
            </article>
        </div>
      </div>
    </div>
  )
}

export default Comentarios
