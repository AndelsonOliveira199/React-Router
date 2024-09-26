// import React from 'react'
import NavBar from '../Componentes/NavBar'
import './Login.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-icons/css/material-icons.css'
import 'materialize-css/dist/js/materialize.min'

const Login = () => {
  return (
    <div>
        <NavBar />
      <div className="row">
        <div className="col s12 login">
          <div className="card col m3 l4 offset-l4">
            <div className="card-content">
              <form>
                <div className="input-field">
                  <input type="email" id="email" name="email" required />
                  <label htmlFor="email"><i className="material-icons">email</i> Email</label>
                </div>
                <div className="input-field">
                  <input type="password" id="password" name="password" required />
                  <label htmlFor="password"><i className="material-icons">vpn_key</i> Password</label>
                </div>
                <div className="input-field">
                  <button className="waves-effect waves-light btn botao">Entrar</button>
                </div>
                <div className="input-field">
                  <p className="center-align">
                    <a href="#" className='white-text'>Esqueci a senha?</a>
                  </p>
                </div>
                <div className="input-field">
                  <p className="center-align">
                    <a href="/cadastro" className='white-text'>Não possui cadastro?</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
