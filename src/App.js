import "./App.css";
import ListProducts from "./components/listProducts";
import ProductDetails from "./components/productDetails";
import Footer from "./components/footer";
import Header from "./components/header";
import Title from "./components/title";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__container">
        <Title />
        <div className="container__sections">
          <section className="section__principal">
            <ListProducts />
            <ProductDetails />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
