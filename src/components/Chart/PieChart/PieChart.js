import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartComponent from "../Chart";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = () => {
  const [chartData, setChartData] = useState([10, 20, 15, 19, 20, 21]);
  const [pluginDisplay, setPluginDisplay] = useState(true);
  useEffect(() => {
    if (window.innerWidth > 425 && window.innerWidth <= 1023) {
      setPluginDisplay(false);
    } else {
      setPluginDisplay(true);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 425 && window.innerWidth <= 1023) {
        setPluginDisplay(false);
        console.log("hello");
      } else {
        setPluginDisplay(true);
      }
    });
  });

  const filterData = [
    {
      title: "6 Months",
      onClick: () => {
        setChartData([10, 20, 15, 19, 20, 21]);
      },
    },
    {
      title: "3 Months",
      onClick: () => {
        setChartData([5, 25, 10, 14, 15, 31]);
      },
    },
    {
      title: "1 Month",
      onClick: () => {
        setChartData([15, 22, 18, 11, 29, 5]);
      },
    },
  ];
  const config = {
    responsive: true,
    plugins: {
      legend: {
        display: pluginDisplay,
      },
      title: {
        display: false,
      },
    },
  };
  const data = {
    labels: [
      "Fin Pay",
      "Jay Pay",
      "Omni Tech",
      "Stack Payment",
      "Acurral",
      "JenX",
    ],
    datasets: [
      {
        label: "% Market share",
        data: chartData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <ChartComponent title="Market Share" type="pie" filterData={filterData}>
      <Pie data={data} options={config} />
    </ChartComponent>
  );
};

export default PieChart;
