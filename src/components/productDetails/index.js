import "./style.css";
import RowProduct from "../rowProduct"

const ProductDetails = () => {
  return (
    <section className="App__section--detail">
      <div class="header__table">
        <div className="table__head">
          <label className="head__product">Product ID</label>
        </div>
        <hr className="head__hr" />
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
           <RowProduct/>
          </tbody>
        </table>
      </div>
      <div className="table__footer">
        <label>Remaining amount </label>
      </div>
    </section>
  );
};

export default ProductDetails;
