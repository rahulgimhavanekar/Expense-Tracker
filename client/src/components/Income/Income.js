import React from "react";
import { useSelector } from "react-redux";
import TransactionList from "../Transactions/TransactionList";
import PieChart from "../Charts/PieChart";
import { generatePieData } from "../../utils/utils";
import { incomeCategories } from "../../utils/constants";
import classes from "./Income.module.css";

const Income = () => {
  const transactions = useSelector((state) => state.transactions);

  const incomeTransactions = transactions.filter(
    (transaction) => transaction.type === "Income"
  );

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
    labels: incomeData.map((item) => item.type),
    datasets: [
      {
        label: "Expenses",
        data: incomeData.map((item) => {
          return item.amount;
        }),
        backgroundColor: incomeCategories.map((item) => item.color),
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
