import "./style.css";

const ProductDetails = () => {
  return (
    <section className="App__section--detail">
      <div class="header__table">
        <label className="table__head">Product ID </label>
        <hr />
        <table cellpadding="0" cellspacing="0" border="0">
          <thead className="table__head">
            <tr>
              <th>Investor name</th>
              <th>Sold</th>
              <th>% Purchased</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table__tbody">
            <tr>
              <td>Y Cobinator</td>
              <td>$830,800</td>
              <td>9mm</td>
              <td>Buttons</td>
            </tr>
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
