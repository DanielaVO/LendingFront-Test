import "./style.scss";
import getRemaining from "../../services/getRemaining";
import { useEffect, useState } from "react";

import ProgressBar from "../progressBar";
const TableFooter = () => {
  const [data, setData] = useState(null);
  let footerText = "";
  let percentage = "";

  useEffect(() => {
    getRemaining().then((data) => setData(data));
  }, []);

  if (data) {
    footerText = `$${data.amount.toLocaleString()} of $${data.total.toLocaleString()}`;
    percentage = data.percentage;
  }
  return (
    <div className="table__footer">
      <div className="table__footer--title">
        <label className="table__footer--label">
          Remaining amount {footerText}
        </label>
      </div>
      <ProgressBar percentage={percentage} />
    </div>
  );
};

export default TableFooter;
