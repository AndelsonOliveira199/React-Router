// import React from 'react'
import './Comentarios.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import 'material-icons/iconfont/filled.css'
// import { imagens } from '../../assets/imagens'
// import { useState } from 'react'

const Comentarios = () => {

    // const [comentarios, setComentarios] = useState("Comentário 2");
    // const Enviar_comentario = () =>{
    //     setComentarios.toString.call();
    // }

  return (
    <div>
      <div className="row">
        <div className="col s12">
            <article className="col m6 l5 ">
                <p> 
                  <button name='muito_satisfeito' title='Muito Satisfeito(a)' className="green white-text"><i className="material-icons medium">sentiment_very_satisfied</i></button>
                  <button name='razuavel' title='Razuável' className="yellow white-text"><i className="material-icons medium">sentiment_satisfied</i></button>  
                  <button name='insatisfeito' title='Insatisfeito(a)' className="red white-text"><i className="material-icons medium">sentiment_very_dissatisfied</i></button> 
                </p>
            </article>
        </div>
      </div>
    </div>
  )
}

export default Comentarios
