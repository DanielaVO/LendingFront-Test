import ProgressBar from "@ramonak/react-progress-bar";
import "./style.scss";

const ProgressBarIndex = (props) => {
  return (
    <>
      <ProgressBar
        className="progress"
        completed={props.percentage}
        bgcolor="#fff"
        height="11px"
        isLabelVisible={false}
        baseBgColor="#80d1d6"
      />
      <div className="progress__percentage">
        <small>{props.percentage}%</small>
        <small>100%</small>
      </div>
    </>
  );
};

export default ProgressBarIndex;
