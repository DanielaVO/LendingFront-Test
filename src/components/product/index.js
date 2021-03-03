import "./style.css";

const Product = () => {
  return (
    <>
      <div className="container">
        <div className="container__info">
          <div className="info__product">
            <label className="product__id">Product ID</label>
            <label>12345</label>
          </div>
          <div className="info__product">
            <small>Advance</small>
            <small>21/12/2019</small>
          </div>
        </div>
        <div className="info__value">
          <small>$2.899.222</small>
        </div>
      </div>
      <hr/>
    </>
  );
};

export default Product;
