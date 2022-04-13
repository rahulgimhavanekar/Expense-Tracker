import React from "react";
import { useSelector } from "react-redux";
import TransactionList from "../Transactions/TransactionList";
import { generatePieData } from "../../utils/utils";
import { expenseCategories } from "../../utils/constants";
import PieChart from "../Charts/PieChart";
import classes from "./Expenses.module.css";

const Expenses = () => {
  const transactions = useSelector((state) => state.transactions);

  const expenseTransactions = transactions.filter(
    (transaction) => transaction.type === "Expense"
  );

  const expenseData = generatePieData(expenseCategories, expenseTransactions);

  const pieOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        titleFont: {
          family: "Poppins, sans-serif",
        },
        bodyFont: {
          family: "Poppins, sans-serif",
        },
      },
    },
  };

  const pieData = {
    labels: expenseData.map((item) => item.type),
    datasets: [
      {
        label: "Expenses",
        data: expenseData.map((item) => {
          return item.amount;
        }),
        backgroundColor: expenseData.map((item) => item.color),
      },
    ],
  };

  return (
    <section className={classes.container}>
      <TransactionList list={expenseTransactions} />
      <div className={classes.chart_container}>
        <h1>Your Expenses</h1>
        <PieChart options={pieOptions} data={pieData} />
      </div>
    </section>
  );
};

export default Expenses;
