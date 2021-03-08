import "./style.scss";
import ListProducts from "../listProducts";
import ProductDetails from "../productDetails";
import { useState } from "react";

const SectionPrincipal = (props) => {
  const [item, setItem] = useState({});
  const [edit, setEdit] = useState(false);

  return (
    <section className="section__principal">
      <ListProducts edit={edit} setItem={setItem} />
      <ProductDetails edit={edit} setEdit={setEdit} item={item} />
    </section>
  );
};

export default SectionPrincipal;
