import React from "react";
import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { expenseCategories, generatePieData } from "../../utils";
import classes from "./ExpensesChart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const expenseColors = [
  "#d3583a",
  "#dc6a48",
  "#e57c58",
  "#ee8d68",
  "#f79d79",
  "#ffae8a",
];

export const expensesAmount = [
  { type: "Food & Drinks", amount: 0 },
  { type: "Shopping", amount: 0 },
  { type: "Travel", amount: 0 },
  { type: "Rent/Mortgage", amount: 0 },
  { type: "Entertainment", amount: 0 },
  { type: "Bills & Payment", amount: 0 },
];

const ExpensesChart = () => {
  const expenseTransactions = useSelector((state) => state.expenses);
  const expenseData = generatePieData(expenseCategories, expenseTransactions);

  const options = {
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

  return (
    <div className={classes.chart_container}>
      <h1>Your Expenses</h1>
      <Pie
        options={options}
        data={{
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
        }}
      />
    </div>
  );
};

export default ExpensesChart;
