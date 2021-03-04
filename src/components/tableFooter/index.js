import "./style.css";

import ProgressBar from "../progressBar";
const TableFooter = (props) => {
  return (
    <div className="table__footer">
      <div className="table__footer--title">
        <label className="table__footer--label">
          Remaining amount {props.amount} of {props.total}
        </label>
      </div>
      <ProgressBar />
    </div>
  );
};

export default TableFooter;
