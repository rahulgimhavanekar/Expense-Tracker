import React from "react";
import { useSelector } from "react-redux";
import TransactionList from "../Transactions/TransactionList";
import ExpensesChart from "./ExpensesChart";
import classes from "./Expenses.module.css";

const Expenses = () => {
  const expenseTransactions = useSelector((state) => state.expenses);

  return (
    <section className={classes.container}>
      <TransactionList list={expenseTransactions} />
      <ExpensesChart />
    </section>
  );
};

export default Expenses;
