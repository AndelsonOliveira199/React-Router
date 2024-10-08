import NavBar from "../Componentes/NavBar"
import { useEffect } from "react";
import '../rotas/Comprar.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import 'material-icons/css/material-icons.css'
// import { json } from "react-router-dom";
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Comprar = () => {

    useEffect(() => {
    
        const M = window.M; // Certifique-se de que Materialize está disponível no escopo global
        const formSelect = document.querySelectorAll('select');
        M.FormSelect.init(formSelect); 
    
      }, []);
      

    // Esquema de envio dos dados
     const handleClickCompra = (values) => {
        
        const {quant_prod, valor} = values;

        const res = quant_prod * valor;

        alert(JSON.stringify(values, null, 2))
        alert(`Valor total a pagar: ${res}`);
     }
    // Esquema de validação com Yup
    const validationCompra = Yup.object().shape({
        primeiro_nome: Yup.string().required('O primeiro nome é obrigatório'),
        nome_produto: Yup.string().required('O nome do produto é obrigatório'),
        quant_prod: Yup.number("O valor da quantidade tem que ser um número")
        .required('A quantidade do produto é obrigatória')
        .positive('A quantidade deve ser positiva'),
        valor: Yup.number()
        .required('O valor do produto é obrigatório')
        .positive('O valor deve ser positivo'),
        ordem_fila: Yup.string()
        .required('O valor da ordem de fila é obrigatório, selecione um valor para este campo')
    });

  return (
    
    <div>
        <NavBar />
        <div className="row">
            <div className="col s12 m3 l4 offset-l4 formulario">
                <div className="card">
                    <div className="card-content">
                        <Formik initialValues={{primeiro_nome: '', nome_produto: '', quant_prod: '', valor: '', ordem_fila: ''}} onSubmit={handleClickCompra} validationSchema={validationCompra}>
                            <Form className="compra-form">
                                <div className="compra-form-group">
                                    <Field name="primeiro_nome" id="primeiro_nome" className="form-field" placeholder="Digite o seu primeiro nome" />
                                    <ErrorMessage component="span" name='primeiro_nome' className='form-error' />
                                </div>
                                <div className="compra-form-group">
                                    <Field name="nome_produto" as="select" className="form-field">
                                        <option value="" selected disabled>Selecione o produto que quer</option>
                                        <option value="pão">Pão</option>
                                        <option value="bolo">Bolo</option>
                                    </Field>
                                    <ErrorMessage component="span" name='nome_produto' className='form-error' />
                                </div>
                                <div className="compra-form-group">
                                    <Field name="quant_prod" className="form-field" placeholder="Quantidade do produto" />
                                    <ErrorMessage component="span" name='quant_prod' className='form-error' />
                                </div>
                                <div className="compra-form-group">
                                    <Field name="valor" as="select" className="form-field">
                                    <option value="" disabled selected>Selecione o preço</option>
                                        <option value="25">25,00 KZ</option>
                                        <option value="50">50,00 KZ</option>
                                        <option value="100">100,00 KZ</option>
                                    </Field>
                                    <ErrorMessage component="span" name='valor' className='form-error' />
                                </div>
                                <div className="compra-form-group">
                                    <Field name="ordem_fila" as="select" className="form-field">
                                    <option value="" disabled selected>Selecione o ordem da fila <i>(sua faixa etaria)</i></option>
                                        <option value="não prioridade">Não Prioridade</option>
                                        <option value="prioridade">Prioridade</option>
                                    </Field>
                                    <ErrorMessage component="span" name='ordem_fila' className='form-error' />
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
