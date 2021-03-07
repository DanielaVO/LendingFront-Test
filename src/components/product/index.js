import "./style.scss";

const Product = (props) => {
  return (
    <>
      <div
        className="container"
        onClick={() => props.setItem({ id: props.id, total: props.total })}
      >
        <div className="container__info">
          <div className="info__product">
            <label className="info__general">Product ID</label>
            <label className="info__id">{props.id}</label>
          </div>
          <div className="info__product">
            <label className="info__advance">Advance</label>
            <label className="info__general">{props.date}</label>
          </div>
        </div>
        <div className="info__value">
          <label className="info__value--label">${props.total}</label>
        </div>
      </div>
      <hr className="hr__product" />
    </>
  );
};

export default Product;
