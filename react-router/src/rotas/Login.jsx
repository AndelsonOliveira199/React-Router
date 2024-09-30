// import React from 'react'
import NavBar from '../Componentes/NavBar'
import './Login.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-icons/css/material-icons.css'
import 'materialize-css/dist/js/materialize.min'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"

const Login = () => {

  // PEGAR OS VALORES DOS CAMPOS
  const handleClickLogin = (values) =>{
    console.log(values)
  }

  // VALIDAÇÃO DOS CAMPOS
  const ValidationLogin = Yup.object().shape({
    email: Yup.string().email("Encontramos um erro no seu email, por favor verifique").required("O campo email é obrigatório"),
    password: Yup.string("A senha tem que ter uma combinação de letras e números").min(8,"A senha tem que ter no mínimo 8 caracteres").required("O campo senha é de preenchimento obrigatório")
  });

  return (
    <div>
        <NavBar />
      <div className="row">
        <div className="col s12 login">
          <div className="card col m3 l4 offset-l4">
            <div className="card-title">
              <h4>Login</h4>
            </div>
            <div className="card-content">
              
            <Formik initialValues={{email: '', password: ''}} onSubmit={handleClickLogin} validationSchema={ValidationLogin}>
              <Form className='login-form'>
                <div className="login-form-group">
                  <Field name="email" className="form-field" placeholder="Email" />
                  <ErrorMessage component="span" name='email' className='form-error form1' />
                </div>
                <div className="login-form-group">
                  <Field name="password" className="form-field" placeholder="Senha" />
                  <ErrorMessage component="span" name='password' className='form-error' />
                </div>
                <div className="login-form-group">
                  <button type="submit" className="btn waves-effect botao">Entrar</button>
                </div>
              </Form>
            </Formik>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
