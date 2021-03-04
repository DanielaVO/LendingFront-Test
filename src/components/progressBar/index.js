import ProgressBar from "@ramonak/react-progress-bar";
import "./style.css";

const ProgressBarIndex = () => {
  return (
    <>
      <ProgressBar
        className="progress"
        completed={10}
        bgcolor="#fff"
        height="11px"
        width="90%"
        isLabelVisible = {false}
        baseBgColor="#80d1d6"
      />
      <div className="progress__percentage">
        <small>0%</small>
        <small>100%</small>
      </div>
    </>
  );
};

export default ProgressBarIndex;
