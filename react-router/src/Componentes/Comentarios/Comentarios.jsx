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
            <article className="col m6 l4 offset-l4">
                <div className="card-panel">
                    <div className="card-content">
                        <h4>Comentários</h4>
                        <ul className="collection">
                            <li className="collection-item">
                                <div className="chip">
                                    <img src={imagens.Braulio} alt="Contact Person" />
                                    <span>{comentarios}</span>
                                </div>
                            </li>
                            <li className="collection-item">
                                <div className="chip">
                                    <img src={imagens.Braulio} alt="Contact Person" />
                                    Comentário 2
                                </div>
                            </li>
                            <li className="collection-item">
                                <div className="chip">
                                    <img src={imagens.Braulio} alt="Contact Person" />
                                    Comentário 3
                                </div>
                            </li>
                        </ul>
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
