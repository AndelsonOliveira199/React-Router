import NavBar from "../Componentes/NavBar";
import { useEffect } from "react";
import 'material-icons/css/material-icons.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
// import { Link } from "react-router-dom"
import './Sobre.css'
import { imagens } from "../assets/imagens";

const Sobre = () => {

  useEffect(() => {
    
    const M = window.M; // Certifique-se de que Materialize está disponível no escopo global
    const Modal = document.querySelectorAll('#modal1');
    M.Modal.init(Modal, {endingTop: '20%', opacity: 1.5});

  }, []);

  // const [numero, setNumero] = useState(0);
  // const [count, setCount] = useState(1);

  // useEffect(() =>{
  //   document.title = `Você clicou ${count} vezes`;
  // })

  // const trocar_titulo = () => {
  //   setCount(count + 1);
  // }

  // numero : valor inicial
  // setNumero : variavel que atualiza o estado da variavel
  // useState : inicialização da variavel ou função do useState
  // const incrementCount = () => {
  //   setNumero(numero + 1);
  // }

  // const decrementCount = () => {
  //   setNumero(numero - 1);
  // }

  return (
    <div>
        <NavBar />
      <div className="row">
        <div className="col s12">
          <div className="container">
            <div className="card">
              <div className="card-content">
                <p>Está aplicação foi feita para interação das padárias com seus clientes com o objectivo de manter a organização, ordem
                  de espera e a gestão dos pedidos.
                </p>
              </div>
              <div className="card-action">
                <h6 title="Descrição sobre o autor do sistema"> <a href="#modal1" className="modal-trigger">Autor: <strong>Andelson Bráulio Jaime de Oliveira</strong></a> </h6>
              </div>
            </div>
          </div>
        </div>

        {/* MODAL */}
        <div className="modal modal-fixed-footer" id="modal1">
          
          <div className="modal-content">
          <h5 className="center"><strong>ANDELSON DE OLIVEIRA <br /> DESENVOLVEDOR WEB</strong></h5>
          <img src={imagens.Braulio} alt="" />
            <hr />
            <p>NOME <strong>[Andelson Braulio Jaime de Oliveira]</strong></p>
            <p>DATA DE NASCIMENTO <strong>[25/01/1995]</strong></p>
            <p>PAÍS <strong>[Angola]</strong></p>
            <p>PROVINCÍA <strong>[Luanda]</strong></p>
            <hr />
            <h5><strong>CONTACTOS</strong></h5>
            <p>UNITEL <strong>[+244 943-773-369]</strong></p>
            <p>AFRICEL <strong>[+244 952-146-133]</strong></p>
            <hr />
            <h5><strong>MÍDIAS SOCÍAIS</strong></h5>
            <p>LINLEDIN <strong>[+244 943-773-369]</strong></p>
            <p>GITHUB <strong>[+244 952-146-133]</strong></p>
            <p>FACEBOOK <strong>[+244 952-146-133]</strong></p>
            <hr />
            <h5><strong>FORMAÇÃO</strong></h5>
            <p>UNIVERSIDADE <strong>[Jean Piaget de Angola]</strong></p>
            <p>LICENCIATURA <strong>[Engenharia Informática]</strong></p>
            <p>DURAÇÃO <strong>[5 Anos]</strong></p>
            <hr />
            <h5><strong>HABILIDADES TÉCNICAS</strong></h5>
            <p><strong>[DESENVOLVEDOR WEB]</strong></p>
            <p>
              <strong>
                <ol>
                  <li>HTML 5</li>
                  <li>CSS 3</li>
                  <li>JavaScript ES6</li>
                  <li>ReactJS</li>
                  <li>Materialize CSS</li>
                  <li>APIS</li>
                </ol>
              </strong>
            </p>
          </div>
          <div className="modal-footer">
            <a className="modal-close red btn btn-floating" title="Fechar"><i className="material-icons">close</i></a>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Sobre
