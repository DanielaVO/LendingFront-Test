import "./style.css";
import ButtonOval from "../buttonOval";
import ProgressBarCircular from "../progressBarCircular";

import Edit from "../../assets/edit.png";
import Close from "../../assets/close_color.png";

const RowProduct = (props) => {
  console.log(props);
  return (
    <>
      {props.detaiil.map((product) => (
        <tr className="tr__body">
          <td>{product.investor}</td>
          <td>{product.sold}</td>
          <td>
            <ProgressBarCircular />
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
