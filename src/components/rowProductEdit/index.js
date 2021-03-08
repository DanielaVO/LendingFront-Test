import "./style.scss";
import ButtonOval from "../buttonOval";
import Close from "../../assets/close_color.png";
import Save from "../../assets/save_white.png";

const RowProductEdit = (props) => {
  return (
    <>
      <div className="tr__edit">
        <div className="investor display-row">
          <label>Select investor</label>
          <select>
            <option value="YCombinator">Y Combinator</option>
            <option value="SaStr">SaStr</option>
            <option value="IndieGo">IndieGo</option>
          </select>
        </div>
        <div className="sold display-row">
          <label>Sold</label>
          <input type="number"></input>
        </div>
        <div className="buttons td__buttons ">
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
      </div>
    </>
  );
};

export default RowProductEdit;
