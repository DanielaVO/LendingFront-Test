import "./style.css";

const buttonLarge = (props) => {
  return (
    <div
      className="buttonLarge"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <img src={props.icon} />
      {props.text}
    </div>
  );
};

export default buttonLarge;
