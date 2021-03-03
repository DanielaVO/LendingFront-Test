import "./style.css";

const Product = () => {
  return (
    <>
      <div className="container">
        <div className="container__info">
          <div className="info__product">
            <label className="info__general">Product ID</label>
            <label className="info__id">12345</label>
          </div>
          <div className="info__product">
            <label className="info__advance">Advance</label>
            <label className="info__general">21/12/2019</label>
          </div>
        </div>
        <div className="info__value">
          <label className="info__value--label">$2.899.222</label>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Product;
