import React from "react";
import { useSelector } from "react-redux";
import TransactionList from "../Transactions/TransactionList";
import PieChart from "../Charts/PieChart";
import { incomeCategories, generatePieData } from "../../utils";
import classes from "./Income.module.css";

const incomeColors = ["#16784f", "#14915f", "#10ac6e", "#0bc77e"];
const incomeAmount = [
  { type: "Salary", amount: 0 },
  { type: "Investments", amount: 0 },
  { type: "Crypto Profits", amount: 0 },
  { type: "Dividend Income", amount: 0 },
];

const Income = () => {
  const incomeTransactions = useSelector((state) => state.income);
  const incomeData = generatePieData(incomeCategories, incomeTransactions);

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
    labels: incomeCategories,
    datasets: [
      {
        label: "Expenses",
        data: incomeData.map((item) => {
          return item.amount;
        }),
        backgroundColor: incomeColors,
      },
    ],
  };

  return (
    <section className={classes.container}>
      <TransactionList list={incomeTransactions} />
      <div className={classes.chart_container}>
        <h1>Your Expenses</h1>
        <PieChart options={pieOptions} data={pieData} />
      </div>
    </section>
  );
};

export default Income;
