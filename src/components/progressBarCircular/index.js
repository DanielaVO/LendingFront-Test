import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.scss";

const ProgressBarCircular = (props) => {
  return (
    <div className="progress__circular">
      <CircularProgressbar
        value={props.purchased}
        text={`${props.purchased}`}
        strokeWidth={5}
        className="circular"
        styles={buildStyles({
          textSize: "20px",
          pathColor: `#47dbd6`,
          textColor: "gray",
          trailColor: "#d6d6d6",
          backgroundColor: "#47dbd6",
        })}
      />
    </div>
  );
};

export default ProgressBarCircular;
