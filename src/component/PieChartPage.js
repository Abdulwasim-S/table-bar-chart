import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

export const options = {
  title: "Pie Chart",
  is3D: true,
};

const PieChartPage = (props) => {
  const { categoriesData } = props;
  const initalData = [["Task", "Category Data"]];
  const [data, setData] = useState(initalData);
  useEffect(() => {
    const x = [["Task", "Category Data"]];
    for (const key in categoriesData) {
      x.push([key, categoriesData[key]]);
    }
    setData(x);
  }, [categoriesData]);

  return (
    <div className="pie-chart-page bg-light">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default PieChartPage;
