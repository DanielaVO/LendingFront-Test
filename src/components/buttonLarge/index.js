import "./style.css";
import Save from "../../assets/save.png";
const ButtonLarge = (props) => {
  return (
    <div
      className="buttonLarge"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <img src={Save} width="15px" height="15px" />
      {props.text}
    </div>
  );
};

export default ButtonLarge;
