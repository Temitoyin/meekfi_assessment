import React, { useState } from "react";
import ChartComponent from "../Chart";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
/**
 * Render BarChart component
 * @returns {React.Component} renders button component
 */
const BarChart = () => {
  const [chartData, setChartData] = useState([65, 59, 80, 81, 56, 55, 40]);
  const filterData = [
    {
      title: "Last 7 Days",
      onClick: () => {
        setChartData([65, 59, 80, 81, 56, 55, 40]);
      },
    },
    {
      title: "Last 3 Days",
      onClick: () => {
        setChartData([50, 45, 70, 74, 35, 45, 30]);
      },
    },
    {
      title: "Last 24 Hours",
      onClick: () => {
        setChartData([23, 24, 50, 31, 22, 25, 10]);
      },
    },
  ];

  const labels = [
    "Fashion",
    "Electronics",
    "Drinks",
    "Home",
    "Baby",
    "Phones",
    "Computers",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Product Categories",
        data: chartData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <ChartComponent title="Product Categories" filterData={filterData}>
      <Bar data={data} options={options} />
    </ChartComponent>
  );
};

export default BarChart;
