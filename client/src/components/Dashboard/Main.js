import React from "react";
import { useSelector } from "react-redux";
import { countTotal } from "../../utils";
import expenseIconGrey from "../../assets/expenses_icon_grey.svg";
import incomeIconGrey from "../../assets/income_icon_grey.svg";
import balanceIcon from "../../assets/balance_icon.svg";
import Card from "../UI/Card";
import classes from "./Main.module.css";
import Chart from "./Chart";

const Main = () => {
  const expenseTransactions = useSelector((state) => state.expenses);
  const incomeTransactions = useSelector((state) => state.income);

  const totalExpense = countTotal(expenseTransactions);
  const totalIncome = countTotal(incomeTransactions);
  const totalBalance = totalIncome - totalExpense;

  return (
    <section className={classes.container}>
      <div className={classes.cards}>
        <Card title="Income" total={totalIncome} icon={incomeIconGrey} />
        <Card title="Expense" total={totalExpense} icon={expenseIconGrey} />
        <Card title="Total Balance" total={totalBalance} icon={balanceIcon} />
      </div>
      <Chart />
    </section>
  );
};

export default Main;
