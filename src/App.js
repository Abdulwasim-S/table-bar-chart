import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Tablepage from "./component/Tablepage";
import BarChartPage from "./component/BarChartPage";
import Statistics from "./component/Statistics";

function App() {
  const [data, setData] = useState();
  const [statisticData, setStatisticData] = useState();
  const [chartData, setChartData] = useState();
  const [monthName, setMonthName] = useState("March");
  const getData = async (month) => {
    try {
      const url = "https://table-bar-chart-be.vercel.app/allcombined/";
      await axios
        .get(url + month)
        .then((res) => {
          setChartData(res.data.barchart_items);
          setData(res.data.items);
          setStatisticData(res.data.statisticData);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const updateMonth = (month, name) => {
    setMonthName(name);
    getData(month);
  };
  useEffect(() => {
    getData("03", "March");
  }, []);
  return (
    <div className="App bg-lightdark">
      <h1 className="page-name">Transctions Table</h1>
      <Tablepage data={data} updateMonth={updateMonth} />
      <Statistics statisticData={statisticData} monthName={monthName} />
      <BarChartPage chartData={chartData} monthName={monthName} />
      <p className="footer-page">
        <i>@Copyrights reserved</i>
      </p>
    </div>
  );
}

export default App;
