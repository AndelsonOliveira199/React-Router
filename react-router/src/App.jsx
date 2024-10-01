import "./App.css";
import NavBar from "./Componentes/NavBar";
import Footer from "./Componentes/Footer";
import Search from "./Componentes/Search";
import Slide from "./Componentes/Slide";
import Cards from "./Componentes/Cards"
import Conteudo from "./Componentes/Conteudo";
import Comentarios from "./Componentes/Comentarios/Comentarios";
import ListaEspera from "./Componentes/Lista-Espera/ListaEspera";

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
      <Conteudo />        

        {/* SEARCH BAR */}

        <Search />

        <ListaEspera />

        <Comentarios />

      {/* FOOTER */}

      <Footer />
    </>
  );
}

export default App;
