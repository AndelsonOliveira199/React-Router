import NavBar from "../Componentes/NavBar"
import { useEffect, useState } from "react";
import '../rotas/Comprar.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import 'material-icons/css/material-icons.css'
// import { json } from "react-router-dom";

const Comprar = () => {

    useEffect(() => {
    
        const M = window.M; // Certifique-se de que Materialize está disponível no escopo global
        const formSelect = document.querySelectorAll('select');
        M.FormSelect.init(formSelect); 
    
      }, []);
      
      const [quant_prod, setQuant_prod] = useState(0);
      const aumentar_quant = () =>{
        setQuant_prod(quant_prod + 1);
      }
      const reduzir_quant = () =>{
        if(quant_prod > 0){
          setQuant_prod(quant_prod - 1);
        }
      }
    //   ============== CONTROLANDO DADOS DE ENTRADA DO FORMULÁRIO ======================
      const [inputs, setInputs] = useState({});
      const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;

        setInputs((values) => ({ ...values, [name]: value }));
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        // alert(json(inputs, null, 2));
        alert(JSON.stringify(inputs, null, 2))
      }

  return (
    
    <div>
        <NavBar />
        <div className="row">
            <div className="col s12 m3 l4 offset-l4 formulario">
                <div className="card">
                    <div className="card-content">
                        <form onSubmit={handleSubmit}>
                            <div className="input-field">
                                <input type="text" name="nome" value={inputs.nome || ""} onChange={handleChange} id="nome" />
                                <label htmlFor="nome">Nome completo</label>
                            </div>
                            <div className="input-field m3 inputs">
                                <select name="produto" value={inputs.produto || ""} onChange={handleChange}>
                                    <option value="" id="produto" disabled>Selecione o produto pretendido</option>
                                    <option value="pão">Pão</option>
                                    <option value="bolo">Bolo</option>
                                </select>
                            </div>
                            <div className="input-field m3 inputs">
                                <select name="preco" value={inputs.preco || ""} onChange={handleChange}>
                                    <option value="" disabled>Selecione o preçario do produto</option>
                                    <option value="25">25,00 KZ</option>
                                    <option value="50">50,00 KZ</option>
                                    <option value="100">100,00 KZ</option>
                                </select>
                            </div>
                            <div className="input-field">
                                <fieldset>
                                    <legend>Quantidade:</legend>
                                    <input type="number" value={inputs.quant_prod || ""} onChange={handleChange} name="quant_prod" id="quant_prod" />
                                    <a href="#" title="Reduzir Quantidade" onClick={reduzir_quant} className="btn red pulse waves-effect z-depth-2">
                                        <i className="material-icons">exposure_neg_1</i>
                                    </a>

                                    <a href="#" title="Aumentar Quantidade" onClick={aumentar_quant} className="btn green waves-effect pulse z-depth-2">
                                        <i className="material-icons">plus_one</i>
                                    </a>
                                </fieldset>
                            </div>
                            <div className="input-field">
                                <button type="submit" className="btn waves-effect botao" title="Comprar">
                                    Comprar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Comprar
