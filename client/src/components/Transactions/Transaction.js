import React from "react";
import { convertDate } from "../../utils/utils";
import { symbol } from "../../utils/constants";
import classes from "./Transaction.module.css";

const Transaction = ({ title, date, amount }) => {
  return (
    <div className={classes.transaction}>
      <div className={classes.left_side}>
        <h5>{title}</h5>
        <p>{convertDate(date)}</p>
      </div>
      <div className={classes.right_side}>
        <p>
          {symbol} {amount}
        </p>
        <button className={classes.btn}>X</button>
      </div>
    </div>
  );
};

export default Transaction;
