import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import expenseIconGrey from "../../assets/expenses_icon_grey.svg";
import incomeIconGrey from "../../assets/income_icon_grey.svg";
import balanceIcon from "../../assets/balance_icon.svg";
import Card from "../UI/Card";
import DatePicker from "react-date-picker";
import { dateRange, generateChartPoints, countTotal } from "../../utils";
import BarChart from "../Charts/BarChart";
import classes from "./Main.module.css";

const Main = () => {
  const [dateForChart, setDateForChart] = useState(new Date());
  const [datesList, setDatesList] = useState([]);

  useEffect(() => {
    setDatesList(
      dateRange(dateForChart.getMonth(), dateForChart.getFullYear())
    );
  }, [dateForChart]);

  const expenseTransactions = useSelector((state) => state.expenses);
  const incomeTransactions = useSelector((state) => state.income);

  const totalExpense = countTotal(expenseTransactions);
  const totalIncome = countTotal(incomeTransactions);
  const totalBalance = totalIncome - totalExpense;

  const expensesChartData = generateChartPoints(datesList, expenseTransactions);
  const incomeChartData = generateChartPoints(datesList, incomeTransactions);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          font: {
            family: "Poppins, sans-serif",
            size: 16,
            lineHeight: 1.2,
          },
        },
      },
    },
  };

  const chartData = {
    labels: datesList.map((item) => {
      return new Date(item).toLocaleDateString([], {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }),
    datasets: [
      {
        label: `Expenses`,
        data: expensesChartData.map((item) => item.value),
        backgroundColor: "#da0037",
      },
      {
        label: `Income`,
        data: incomeChartData.map((item) => item.value),
        backgroundColor: "#000",
      },
    ],
  };

  return (
    <section className={classes.container}>
      <div className={classes.cards}>
        <Card title="Income" total={totalIncome} icon={incomeIconGrey} />
        <Card title="Expense" total={totalExpense} icon={expenseIconGrey} />
        <Card title="Total Balance" total={totalBalance} icon={balanceIcon} />
      </div>
      <div className={classes.chart_container}>
        <div className={classes.date_range}>
          <label htmlFor="from">For</label>
          <DatePicker
            onChange={setDateForChart}
            value={dateForChart}
            format="y MMMM"
            disableCalendar={true}
            maxDate={new Date()}
          />
        </div>
        <BarChart options={chartOptions} data={chartData} />
      </div>
    </section>
  );
};

export default Main;
