import "./App.css";
import ListProducts from "./components/listProducts";
import ProductDetails from "./components/productDetails";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <header className="App__header"></header>
      <div className="App__container">
        <div className="container__title">
          <h1>Advances of syndication</h1>
        </div>
        <div className="container__sections">
          <section className="App__section">
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
