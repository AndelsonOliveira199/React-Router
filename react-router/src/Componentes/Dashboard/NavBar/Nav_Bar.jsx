// import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import 'material-icons/iconfont/filled.css'
import {useEffect} from 'react'
import './Nav_Bar.css'

const Nav_Bar = () => {

  useEffect(() => {
    
    const M = window.M; // Certifique-se de que Materialize está disponível no escopo global
    const sidenavElems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavElems); 

    const elems = document.querySelectorAll('.tabs');
    M.Tabs.init(elems);

  }, []);

  return (
    <div>
      <nav className="nav-extended">
        <div className="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#"><i className="material-icons left">account_circle</i> Conta</a></li>
            <li><a href="#"><i className="material-icons left">notifications_active</i>Notificações</a></li>
            <li><a href="#"><i className="material-icons left">exit_to_app</i> Sair <i className="material-icons right">arrow_drop_down</i></a></li>
        </ul>
        </div>
        <div className="nav-content">
        <ul className="tabs tabs-transparent">
            <li className="tab"><a href="#test1"><i className="material-icons left">local_grocery_store</i> Produtos</a></li>
            <li className="tab"><a href="#test2"><i className="material-icons left">group</i> Funcionários</a></li>
            <li className="tab"><a href="#test3"><i className="material-icons left">content_paste</i> Relatórios</a></li>
            <li className="tab"><a href="#test4"><i className="material-icons left">comment</i> Comentários</a></li>
        </ul>
        </div>
    </nav>

        <ul className="sidenav" id="mobile-demo">
            <li><a href="#">Nome</a></li>
            <li><a href="#">Perfil</a></li>
            <li><a href="#">Sair</a></li>
        </ul>

        <div className="row">
          <div id="test1" className="col s12">
            <div className="container">
              <a href="#" title="Adicionar Produto" className="right btn waves-effect blue">
                <i className="material-icons">add_box</i>
              </a>
            <table className="centered responsive-table">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Descrição</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>O que pretende fazer?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pão</td>
                  <td>Pão Americano</td>
                  <td>50,00 KZ</td>
                  <td>50</td>
                  <td>
                    <a href="#" title='Editar' className="btn btn-floating waves-effect green">
                      <i className="material-icons">edit</i>
                    </a>
                    <a href="#" title='Eliminar' className="btn btn-floating waves-effect red">
                      <i className="material-icons">delete</i>
                    </a>
                    <a href="#" title='Vender Produto' className="btn btn-floating waves-effect green">
                      <i className="material-icons">add_shopping_cart</i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
        <div id="test2" className="col s12 l4">
          <div className="container">
            <div className="card">
              <div className="card-action"><h5>Dados do Funcionário</h5></div>
              <div className="card-content">
                <p>Dados do funcionário</p>
              </div>
            </div>
          </div>
        </div>
        <div id="test3" className="col s12">
          <div className="container">
            <div className="card">
              <div className="card-action"><h5>Relatórios</h5></div>
              <div className="card-content"><p>Conteúdo do relatório</p></div>
            </div>
          </div>
        </div>
        <div id="test4" className="col s12">
        <div className="container">
          <div className="card">
            <div className="card-action"><h5>Comentários</h5></div>
            <div className="card-content"><p>Conteúdo dos comentáristas</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav_Bar
