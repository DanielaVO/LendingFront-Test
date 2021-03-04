import "./style.css";

const ButtonOval = (props) => {
  return (
    <div
      class="button"
      style={{
        backgroundColor: props.bgColor,
        border: props.border,
        width: props.width,
        height: props.height,
      }}
    >
      <img
        src={props.icon}
        width={props.sizeImg}
        height={props.sizeImg}
        alt="button"
      />
    </div>
  );
};

export default ButtonOval;
