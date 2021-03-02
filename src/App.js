import "./App.css";
import ListProducts from "./components/listProducts";
import ProductDetails from "./components/productDetails";

function App() {
  return (
    <div className="App">
      <header className="App__header"></header>
      <section className="App__section">
        <ListProducts/>
        <section className="App__section--detail">
          <ProductDetails />
        </section>
      </section>
      <div className="App__footer">© LendingFront 2016</div>
    </div>
  );
}

export default App;
