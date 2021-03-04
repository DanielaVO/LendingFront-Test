import "./style.css";
import RowProduct from "../rowProduct";
import TableFooter from "../tableFooter";
import { useEffect, useState } from "react";
import getProductDetail from "../../services/getProductDetail";

const ProductDetails = (props) => {
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    getProductDetail().then((productDetail) => setProductDetail(productDetail));
  }, []);

  return (
    <section className="app__section--detail">
      <div className="detail__button">|&gt;</div>
      <div class="header__table">
        <div className="table__head">
          <label className="head__product">Product ID {props.id}</label>
        </div>
        <table cellpadding="0" cellspacing="0" border="0">
          <thead className="table__head">
            <tr className="tr__head">
              <th>Investor name</th>
              <th>Sold</th>
              <th>% Purchased</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table__tbody">
            <RowProduct detaiil={productDetail}/>
          </tbody>
        </table>
      </div>
      <TableFooter amount="12345" total="1232456" />
    </section>
  );
};

export default ProductDetails;
