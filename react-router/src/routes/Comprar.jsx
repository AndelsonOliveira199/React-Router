import NavBar from "../Componentes/NavBar"
import { useEffect } from "react";
import '../routes/Comprar/Comprar.css'

const Comprar = () => {

    useEffect(() => {
    
        const M = window.M; // Certifique-se de que Materialize está disponível no escopo global
        const formSelect = document.querySelectorAll('select');
        M.FormSelect.init(formSelect); 
    
      }, []);

  return (
    <div>
        <NavBar />
      <div className="row">
        <div>
            <span className="col s12 m5 l4 offset-l4">
                <div className="card">
                    <div className="card-content">
                        <form>
                            <div className="input-field m3">
                                <select name="produto">
                                    <option value="" disabled selected>Selecione o produto pretendido</option>
                                    <option value="pão">Pão</option>
                                    <option value="bolo">Bolo</option>
                                </select>
                            </div>
                            <div className="input-field m3">
                                <select name="preco">
                                    <option value="" disabled selected>Selecione o preçario do produto</option>
                                    <option value="25">25,00 KZ</option>
                                    <option value="50">50,00 KZ</option>
                                    <option value="100">100,00 KZ</option>
                                </select>
                            </div>
                            <div className="input-field m3">
                                <input type="number" name="quant_prod" id="quant_prod" />
                                <label htmlFor="quant_prod">Quantos produtos quer?</label>
                            </div>
                            <div className="input-field m3">
                                <button className="btn waves-effect btn-floating green" title="Comprar">
                                    <i className="material-icons">send</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </span>
        </div>
      </div>
    </div>
  )
}

export default Comprar
