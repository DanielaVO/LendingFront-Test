import "./style.scss";
import ButtonOval from "../buttonOval";
import ProgressBarCircular from "../progressBarCircular";
import Edit from "../../assets/edit.png";
import Close from "../../assets/close_color.png";

const RowProduct = (props) => {
  console.log("hola", props);
  return (
    <>
      {props.detail.map((product) => (
        <tr className="tr__body" key={product.product_id}>
          <td>{product.investor}</td>
          <td>${product.sold.toLocaleString()}</td>
          <td>
            <ProgressBarCircular purchased={product.purchased} />
          </td>
          <td>
            <div className="td__buttons">
              {product.read_only ? (
                ""
              ) : (
                <>
                  <ButtonOval
                    icon={Edit}
                    bgColor="#05a2aa"
                    border=" 1px solid #05a2aa"
                    height="30px"
                    width="30px"
                    sizeImg="15px"
                    onClick={() => {
                      props.setEdit(true);
                    }}
                  />
                  <ButtonOval
                    icon={Close}
                    bgColor="#fff"
                    border="1px solid #05a2aa"
                    height="30px"
                    width="30px"
                    sizeImg="15px"
                  />
                </>
              )}
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default RowProduct;
