import './Footer.css'
import { imagens } from '../assets/imagens'

const Footer = () => {
  return (
    <div>
      <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text empresa">Bakery</h5>
                <p className="grey-text text-lighten-4">
                Obrigado por se juntar à nossa jornada! Juntos, podemos criar um futuro melhor. Explore, engaje-se e faça parte de algo significativo.
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Nossas Redes</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">
                    <img src={imagens.insta} alt="" /></a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">
                    <img src={imagens.whatsapp} alt="" /></a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">
                  <img src={imagens.youtub} alt="" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2024 Copyright Todos os direitos reservados
            <a className="grey-text text-lighten-4 right" href="#!">Autor</a>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer
