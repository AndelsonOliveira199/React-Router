import "./App.css";
import NavBar from "./Componentes/NavBar";
import Footer from "./Componentes/Footer";
import Search from "./Componentes/Search";
import Slide from "./Componentes/Slide";
import Cards from "./Componentes/Cards"
import Conteudo from "./Componentes/Conteudo";

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
      

      {/* FOOTER */}

      <Footer />
    </>
  );
}

export default App;
