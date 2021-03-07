import "./style.scss";
import RowProduct from "../rowProduct";
import TableFooter from "../tableFooter";
import { useEffect, useState } from "react";
import getProductDetail from "../../services/getProductDetail";
import ButtonOval from "../buttonOval";
import Plus from "../../assets/plus.png";
import RowProductEdit from "../rowProductEdit";


const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    getProductDetail().then((productDetail) => setProductDetail(productDetail));
  }, []);
  console.log(productDetail)

  return (
    <section className="app__section--detail">
      <div className="detail__button">
        <ButtonOval
          icon={Plus}
          bgColor="orange"
          border=" 1px solid #05a2aa"
          height="55px"
          width="55px"
          sizeImg="25px"
        />
      </div>
      <div className="header__table">
        <div>
          <div className="table__head">
            <label className="head__product">Product ID {productDetail.product_id}</label>
          </div>
          <table cellPadding="0" cellSpacing="0" border="0">
            <thead className="table__head">
              <tr className="tr__head">
                <th>Investor name</th>
                <th>Sold</th>
                <th>% Purchased</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="table__tbody">
            
              <RowProduct detail={productDetail} />
            </tbody>
          </table>
        </div>
      </div>
      <TableFooter amount="12345" total="1232456" />
    </section>
  );
};

export default ProductDetails;
