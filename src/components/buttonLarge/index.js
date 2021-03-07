import "./style.scss";

const ButtonLarge = (props) => {
  return (
    <div
      className="buttonLarge"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <img
        className="button__img"
        src={props.icon}
        width="10px"
        height="10px"
        alt={props.text}
      />
      <label className="button__label">{props.text}</label>
    </div>
  );
};

export default ButtonLarge;
