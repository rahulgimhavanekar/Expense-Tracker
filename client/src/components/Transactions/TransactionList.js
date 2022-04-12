import React from "react";
import Transaction from "./Transaction";
import historyIcon from "../../assets/history_icon.svg";
import classes from "./TransactionList.module.css";

const TransactionList = ({ list }) => {
  return (
    <div className={classes.list}>
      <div className={classes.header}>
        <img src={historyIcon} alt="icon" />
        <h1>Recent Transactions</h1>
      </div>
      <div className={classes.content}>
        {list.map((transaction) => {
          return (
            <Transaction
              key={transaction._id}
              id={transaction._id}
              title={transaction.title}
              date={transaction.date}
              amount={transaction.amount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TransactionList;
