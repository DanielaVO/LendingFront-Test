import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./style.css";

const percentage = 66;

const ProgressBarCircular = () => {
  return (
    <div className="progress__circular">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}`}
        strokeWidth={5}
        styles={buildStyles({
          textSize: "20px",
          pathColor: `#47dbd6`,
          textColor: "#gray",
          trailColor: "#d6d6d6",
          backgroundColor: "#47dbd6",
        })}
      />
    </div>
  );
};

export default ProgressBarCircular;
