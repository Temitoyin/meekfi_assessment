import React, { useState } from "react";
import ChartComponent from "../Chart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

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
 * Render LineChart component
 * @returns {React.Component} renders button component
 */
const LineChart = () => {
  const [chartData, setChartData] = useState({
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    data: [100, 123, 300, 439, 500, 630, 530, 722, 445, 834, 934, 1002],
  });
  const filterData = [
    {
      title: "Last 12 Months",
      onClick: () => {
        setChartData({
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          data: [100, 123, 300, 439, 500, 630, 530, 722, 445, 834, 934, 1002],
        });
      },
    },
    {
      title: "Last 6 Months",
      onClick: () => {
        setChartData({
          labels: [
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          data: [530, 722, 445, 834, 934, 1002],
        });
      },
    },
    {
      title: "Last 3 Months",
      onClick: () => {
        setChartData({
          labels: ["October", "November", "December"],
          data: [834, 934, 1002],
        });
      },
    },
  ];
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

  const labels = chartData.labels;
  const data = {
    labels,
    datasets: [
      {
        label: "Sales revenue (Millions)",
        data: chartData.data,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <ChartComponent title="Sales revenue" filterData={filterData}>
      <Line options={options} data={data} />
    </ChartComponent>
  );
};

export default LineChart;
