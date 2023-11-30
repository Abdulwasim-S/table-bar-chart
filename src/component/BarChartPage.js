import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartPage = (props) => {
  const { chartData, monthName } = props;
  const [xaxis, setXaxis] = useState();
  const [yaxis, setYaxis] = useState();
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Bar chart",
      },
    },
  };
  const data = {
    labels: xaxis,
    datasets: [
      {
        label: monthName,
        data: yaxis,
        backgroundColor: "rgba(0, 150, 255,0.5)",
      },
    ],
  };
  useEffect(() => {
    const x = [];
    const y = [];
    for (const key in chartData) {
      if (chartData.hasOwnProperty(key)) {
        x.push(key);
        y.push(chartData[key]);
      }
    }
    setXaxis(x);
    setYaxis(y);
  }, [chartData]);
  return (
    <div className="bar-chart-box">
      <Bar className="bar-chart" data={data} options={options} />
    </div>
  );
};

export default BarChartPage;
