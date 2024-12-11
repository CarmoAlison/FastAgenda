import Logo from './Logo.jpg';
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header
        logo={Logo}
        menu={["Home", "Setor Médico", "Setor Esportivo", "Setor Alimentício", "Setor Educativo", "Sobre"]}
      />
      <Cards />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}

export default App;