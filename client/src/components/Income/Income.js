import React from "react";
import { useSelector } from "react-redux";
import TransactionList from "../Transactions/TransactionList";
import IncomeChart from "./IncomeChart";
import classes from "./Income.module.css";

const Income = () => {
  const incomeTransactions = useSelector((state) => state.income);

  return (
    <section className={classes.container}>
      <TransactionList list={incomeTransactions} />
      <IncomeChart />
    </section>
  );
};

export default Income;
