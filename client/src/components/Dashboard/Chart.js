import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import DatePicker from "react-date-picker";
import { dateRange, generateChartPoints } from "../../utils";
import classes from "./Chart.module.css";

ChartJS.register(
  CategoryScale,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const [dateForChart, setDateForChart] = useState(new Date());
  const [datesList, setDatesList] = useState([]);

  const expenseTransactions = useSelector((state) => state.expenses);
  const incomeTransactions = useSelector((state) => state.income);

  useEffect(() => {
    setDatesList(
      dateRange(dateForChart.getMonth(), dateForChart.getFullYear())
    );
  }, [dateForChart]);

  console.log(datesList);

  const expensesChartData = generateChartPoints(datesList, expenseTransactions);
  const incomeChartData = generateChartPoints(datesList, incomeTransactions);

  console.log(dateForChart);

  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          font: {
            family: "Poppins, sans-serif",
          },
        },
      },
      y: {
        ticks: {
          font: {
            family: "Poppins, sans-serif",
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            family: "Poppins, sans-serif",
            size: 16,
            lineHeight: 1.2,
          },
        },
      },
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

  const labels = datesList.map((item) => {
    return new Date(item).toLocaleDateString([], {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  const data = {
    labels: labels,
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
    <div className={classes.container}>
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
      <div className={classes.bar_chart}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default Chart;
