import "./style.scss";
import ListProducts from "../listProducts";
import ProductDetails from "../productDetails";
import { useState } from "react";

const SectionPrincipal = (props) => {
  const [item, setItem] = useState({});

  return (
    <section className="section__principal">
      <ListProducts setItem={setItem} />
      <ProductDetails item={item} />
    </section>
  );
};

export default SectionPrincipal;
