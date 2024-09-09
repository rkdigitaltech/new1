import React from "react";
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

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  scales: {
    y: {
      min: 0, // Set the minimum value for the y-axis
      max: 100, // Set the maximum value for the y-axis
      ticks: {
        stepSize: 10, // Set the step size for the y-axis ticks
      },
    },
  },
};

const BarChart = ({ score }) => {
  const data = {
    labels: ["Your Score"],
    datasets: [
      {
        label: "Your Financial Fitness Score",
        backgroundColor: "rgb(218, 148, 18)",
        borderColor: "rgb(218, 148, 18)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(230, 154, 14",
        hoverBorderColor: "rgba(230, 154, 14)",
        data: [score],
      },
    ],
  };

  return <Bar data={data} width={100} height={100} options={options} />;
};

export default BarChart;
