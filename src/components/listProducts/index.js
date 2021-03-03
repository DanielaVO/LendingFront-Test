import "./style.css";
import { useEffect, useState } from "react";
import Product from "../product";
import ButtonLarge from "../buttonLarge";
import Save from "../../assets/save.png";
import Close from "../../assets/close.png";

const ListProducts = () => {
  const [products, setProducts] = useState([]);

  return (
    <section className="section">
      <div className="section__title">
        <small className="title__small">Select a product to syndicate</small>
      </div>
      <Product />
      <div className="section__footer">
        <ButtonLarge text="Close" icon={Close} bgColor="#05a2aa" color="#fff" />
        <ButtonLarge text="Sell" icon={Save} bgColor="#fff" color="#05a2aa" />
      </div>
    </section>
  );
};

export default ListProducts;
