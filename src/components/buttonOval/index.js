import "./style.css";

const ButtonOval = (props) => {
  return (
    <div
      class="button"
      style={{ backgroundColor: props.bgColor, border: props.border }}
    >
      <img src={props.icon} width="15px" height="15px" alt="button" />
    </div>
  );
};

export default ButtonOval;
