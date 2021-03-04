import "./style.css";
import { useEffect, useState } from "react";
import Product from "../product";
import ButtonLarge from "../buttonLarge";
import Save from "../../assets/save.png";
import Close from "../../assets/close.png";
import getProducts from "../../services/getProducts";

const ListProducts = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return (
    <section className="section">
      <div className="section__title">
        <small className="title__small">Select a product to syndicate</small>
      </div>
      <div className="products"> 
        {products.map((product) => (
          <Product
            setItem = {props.setItem}
            key={product.product_id}
            id={product.product_id}
            date={product.date}
            total={product.total}
          />
        ))}
      </div>
      <div className="section__footer">
        <ButtonLarge text="Close" icon={Close} bgColor="#05a2aa" color="#fff" />
        <ButtonLarge text="Sell" icon={Save} bgColor="#fff" color="#05a2aa" />
      </div>
    </section>
  );
};

export default ListProducts;
