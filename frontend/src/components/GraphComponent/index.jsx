import "./GraphComponent.css";
import { useState } from "react";

import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
);

export default function GraphComponent({ title, data }) {
  const [chartIndex, setChartIndex] = useState(1);
  return (
    <div className="graphComponentContainer">
      <div className="titleAndSettings">
        <p className="graphTitle">{title}</p>
        <div className="graphSwitch">
          <button
            className="pieChartButton"
            onFocus={chartIndex === 1}
            onClick={() => setChartIndex(1)}
          >
            <img src="../src/assets/icons/pie_chart.svg"></img>
          </button>
          <button
            className="pieChartButton"
            onFocus={chartIndex === 0}
            onClick={() => setChartIndex(0)}
          >
            <img src="../src/assets/icons/bar_chart.svg"></img>
          </button>
        </div>
      </div>
      <div className="graph">
        {chartIndex === 0 ? (
          <Bar data={data} />
        ) : (
          <Pie data={data} className="pieChart" />
        )}
        {/* <Bar data={data} /> */}
      </div>
    </div>
  );
}
