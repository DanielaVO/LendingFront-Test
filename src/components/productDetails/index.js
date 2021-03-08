import "./style.scss";
import RowProduct from "../rowProduct";
import TableFooter from "../tableFooter";
import { useEffect, useState } from "react";
import getProductDetail from "../../services/getProductDetail";
import ButtonOval from "../buttonOval";
import Plus from "../../assets/plus.png";
import RowProductEdit from "../rowProductEdit";

const ProductDetails = (props) => {
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    getProductDetail().then((productDetail) => setProductDetail(productDetail));
  }, []);
  console.log(productDetail);

  return (
    <section className="app__section--detail">
      {props.edit ? (
        ""
      ) : (
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
      )}
      <div className="header__table">
        <div>
          <div className="table__head">
            <label className="head__product">Product ID {props.item.id}</label>
          </div>
          {props.edit ? (
            <>
              <div className="head__edit">
                <label>Edit purchase</label>
              </div>
              <RowProductEdit />
            </>
          ) : (
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
                <RowProduct setEdit={props.setEdit} detail={productDetail} />
              </tbody>
            </table>
          )}
        </div>
      </div>
      <TableFooter amount="12345" total="1232456" />
    </section>
  );
};

export default ProductDetails;
