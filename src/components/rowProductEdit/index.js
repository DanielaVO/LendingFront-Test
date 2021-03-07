import "./style.scss";
import ButtonOval from "../buttonOval";
import Close from "../../assets/close_color.png";
import Save from "../../assets/save_white.png";

const RowProductEdit = (propd) => {
  return (
    <>
      <tr className="tr__edit">
        <td>
          <div className="td__edit">
            <label>Select investor</label>
            <select>
              <option value="YCombinator">Y Combinator</option>
              <option value="SaStr">SaStr</option>
              <option value="IndieGo">IndieGo</option>
            </select>
          </div>
        </td>
        <td>
          <div className="td__edit">
            <label>Sold</label>
            <input type="number"></input>
          </div>
        </td>
        <td>
          <div className="td__buttons">
            <ButtonOval
              icon={Save}
              bgColor="#05a2aa"
              border=" 1px solid #05a2aa"
              height="30px"
              width="30px"
              sizeImg="15px"
            />
            <ButtonOval
              icon={Close}
              bgColor="#fff"
              border=" 1px solid #05a2aa"
              height="30px"
              width="30px"
              sizeImg="12px"
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default RowProductEdit;
