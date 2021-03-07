import "./App.scss";
import Footer from "./components/footer";
import Header from "./components/header";
import Title from "./components/title";
import SectionPrincipal from "./components/sectionPrincipal";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__container">
        <Title />
        <div className="container__sections">
          <SectionPrincipal />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
