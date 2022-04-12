import React from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../actions/transactionActions";
import { convertDate } from "../../utils/utils";
import { symbol } from "../../utils/constants";
import classes from "./Transaction.module.css";

const Transaction = ({ id, title, date, amount }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTransaction(id));
  };

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
        <button className={classes.btn} onClick={deleteHandler}>
          X
        </button>
      </div>
    </div>
  );
};

export default Transaction;
