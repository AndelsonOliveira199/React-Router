import "./App.css";
import NavBar from "./Componentes/NavBar";
import Footer from "./Componentes/Footer";
import Search from "./Componentes/Search";
import Slide from "./Componentes/Slide";
import Cards from "./Componentes/Cards"

function App() {
  return (
    <>
      <NavBar />

      {/* SLIDE */}

      <Slide />

      {/* FIM DO SLIDE */}

      {/* CARDS */}
      <Cards />
      
      {/* CONTEÚDO */}
        <div className="row">
          <div className="container">
            <div className="col s12">
              <p className="boas_vindas">
                Saudações e bem-vindo à [React-Router]! Estamos encantados em tê-lo como parte da nossa comunidade. 
                Sinta-se à vontade para descobrir, interagir e colaborar conosco para criar algo maravilhoso.
              </p>
            </div>
          </div>
        </div>

        

        {/* SEARCH BAR */}

        <Search />
      

      {/* FOOTER */}

      <Footer />
    </>
  );
}

export default App;
