import "./style.css";
import ButtonOval from "../buttonOval";
import Edit from "../../assets/edit.png";
import Close from "../../assets/close_color.png";

const RowProduct = () => {
  return (
    <tr>
      <td>Y Cobinator</td>
      <td>$830,800</td>
      <td>9mm</td>
      <td>
        <ButtonOval icon={Edit} bgColor="#05a2aa" border=" 1px solid #05a2aa" />
        <ButtonOval icon={Close} bgColor="#fff" border="1px solid #05a2aa" />
      </td>
    </tr>
  );
};

export default RowProduct;
