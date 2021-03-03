import "./style.css";
import ProgressBar from "../progressBar";
const TableFooter = (props) => {
  return (
    <div className="table__footer">
      <label className="table__footer--title">
        Remaining amount {props.amount} of {props.total}{" "}
      </label>
      <ProgressBar />
    </div>
  );
};

export default TableFooter;
