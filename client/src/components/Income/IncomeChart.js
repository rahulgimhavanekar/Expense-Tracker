import React from "react";
import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { incomeCategories, generatePieData } from "../../utils";
import classes from "./IncomeChart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const incomeColors = ["#16784f", "#14915f", "#10ac6e", "#0bc77e"];
export const incomeAmount = [
  { type: "Salary", amount: 0 },
  { type: "Investments", amount: 0 },
  { type: "Crypto Profits", amount: 0 },
  { type: "Dividend Income", amount: 0 },
];

const IncomeChart = () => {
  const incomeTransactions = useSelector((state) => state.income);
  const incomeData = generatePieData(incomeCategories, incomeTransactions);

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
        }}
      />
    </div>
  );
};

export default IncomeChart;
