// import React from 'react'
import './Comentarios.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import 'material-icons/iconfont/filled.css'
import { imagens } from '../../assets/imagens'
import { useState } from 'react'

const Comentarios = () => {

    const [comentarios, setComentarios] = useState("Comentário 2");
    const Enviar_comentario = () =>{
        setComentarios.toString.call();
    }

  return (
    <div>
      <div className="row">
        <div className="col s12">
            <article className="col m6 l5 offset-l3">
                <div className="card-panel">
                    <div className="card-content">
                        <h4>Comentários</h4>
                        <textarea name="comentario" id="comentario" className='materialize-textarea' placeholder='Escreva um comentário'></textarea>
                        <button onClick={Enviar_comentario} className="btn btn-floating waves-effect blue" title='Adicionar Comentário'>
                            <i className="material-icons">send</i></button>
                    </div>
                </div>
            </article>
        </div>
      </div>
    </div>
  )
}

export default Comentarios
