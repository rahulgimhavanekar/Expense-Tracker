import React from "react";
import { useSelector } from "react-redux";
import TransactionList from "../Transactions/TransactionList";
import { expenseCategories, generatePieData } from "../../utils";
import PieChart from "../Charts/PieChart";
import classes from "./Expenses.module.css";

const expenseColors = [
  "#d3583a",
  "#dc6a48",
  "#e57c58",
  "#ee8d68",
  "#f79d79",
  "#ffae8a",
];

const expensesAmount = [
  { type: "Food & Drinks", amount: 0 },
  { type: "Shopping", amount: 0 },
  { type: "Travel", amount: 0 },
  { type: "Rent/Mortgage", amount: 0 },
  { type: "Entertainment", amount: 0 },
  { type: "Bills & Payment", amount: 0 },
];

const Expenses = () => {
  const expenseTransactions = useSelector((state) => state.expenses);
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
    labels: expenseCategories,
    datasets: [
      {
        label: "Expenses",
        data: expenseData.map((item) => {
          return item.amount;
        }),
        backgroundColor: expenseColors,
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
