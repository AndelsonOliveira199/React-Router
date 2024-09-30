import NavBar from "../Componentes/NavBar"
// import { useEffect } from "react";
import '../rotas/Comprar.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import 'material-icons/css/material-icons.css'
// import { json } from "react-router-dom";
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Comprar = () => {

    // useEffect(() => {
    
    //     const M = window.M; // Certifique-se de que Materialize está disponível no escopo global
    //     const formSelect = document.querySelectorAll('select');
    //     M.FormSelect.init(formSelect); 
    
    //   }, []);
      
     const handleClickCompra = (values) => {
        console.log(values)
     }
    // Esquema de validação com Yup
    const validationCompra = Yup.object().shape({
        primeiro_nome: Yup.string().required('O primeiro nome é obrigatório'),
        nome_produto: Yup.string().required('O nome do produto é obrigatório'),
        quant_prod: Yup.number()
        .required('A quantidade do produto é obrigatória')
        .positive('A quantidade deve ser positiva')
        .integer('A quantidade deve ser um número inteiro'),
        valor: Yup.number()
        .required('O valor do produto é obrigatório')
        .positive('O valor deve ser positivo'),
    });

  return (
    
    <div>
        <NavBar />
        <div className="row">
            <div className="col s12 m3 l4 offset-l4 formulario">
                <div className="card">
                    <div className="card-content">
                        <Formik initialValues={{primeiro_nome: '', nome_produto: '', quant_prod: '', valor: ''}} onSubmit={handleClickCompra} validationSchema={validationCompra}>
                            <Form className="compra-form">
                                <div className="compra-form-group">
                                    <Field name="primeiro_nome" className="form-field" placeholder="Primeiro nome" />
                                    <ErrorMessage component="span" name='primeiro_nome' className='form-error' />
                                </div>
                                <div className="compra-form-group">
                                    <Field name="nome_produto" className="form-field" placeholder="Nome do produto" />
                                    <ErrorMessage component="span" name='nome_produto' className='form-error' />
                                </div>
                                <div className="compra-form-group">
                                    <Field name="quant_prod" className="form-field" placeholder="Quantidade do produto" />
                                    <ErrorMessage component="span" name='quant_prod' className='form-error' />
                                </div>
                                <div className="compra-form-group">
                                    <Field name="valor" className="form-field" placeholder="Valor do produto" />
                                    <ErrorMessage component="span" name='valor' className='form-error' />
                                </div>
                                <button type="submit" className="btn waves-effect botao" title="Comprar">
                                    <i className="material-icons">send</i>
                                </button>
                            </Form>
                            
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Comprar
