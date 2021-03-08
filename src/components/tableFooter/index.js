import "./style.scss";
import getRemaining from "../../services/getRemaining";
import { useEffect, useState } from "react";

import ProgressBar from "../progressBar";
const TableFooter = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getRemaining().then((data) => setData(data));
  }, []);

  return (
    <div className="table__footer">
      <div className="table__footer--title">
        <label className="table__footer--label">
          Remaining amount ${data.amount} of ${data.total}
        </label>
      </div>
      <ProgressBar percentage={data.percentage} />
    </div>
  );
};

export default TableFooter;
