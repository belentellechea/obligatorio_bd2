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

export default function GraphComponent({ title, data, ganadores, errorMsg }) {
  const [chartIndex, setChartIndex] = useState(1);

  if (errorMsg) {
    return (
      <div className="graphComponentContainer error">
        <div className="titleAndSettings">
          <p className="graphTitle">{title}</p>
        </div>
        <div className="errorMessage">
          <p>{errorMsg}</p>
        </div>
      </div>
    );
  }

  if (!data || !data.labels || !data.datasets) {
    return (
      <div className="graphComponentContainer loading">
        <div className="titleAndSettings">
          <p className="graphTitle">{title}</p>
        </div>
        <div className="loaderContainer">
          <div className="loader"></div> <p>Cargando gráfico...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="graphComponentContainer">
      <div className="titleAndSettings">
        <p className="graphTitle">{title}</p>
        <div className="graphSwitch">
          <button
            className={`pieChartButton ${chartIndex === 1 ? "Selected" : ""}`}
            onClick={() => setChartIndex(1)}
          >
            <img src="../src/assets/icons/pie_chart.svg"></img>
          </button>
          <button
            className={`pieChartButton ${chartIndex === 0 ? "Selected" : ""}`}
            onClick={() => setChartIndex(0)}
          >
            <img src="../src/assets/icons/bar_chart.svg"></img>
          </button>
        </div>
      </div>
      <div className="graph">
        {chartIndex === 0 ? (
          <Bar data={data} className="barChart" />
        ) : (
          <Pie data={data} className="pieChart" />
        )}
      </div>
      <div className="winnerInfo">
        {ganadores && ganadores.length > 0 && (
          <div className="ganadoresResumen">
            {ganadores.length === 1 ? (
              <>
                Ganador:{" "}
                <strong>{ganadores[0].lista || ganadores[0].partido}</strong>{" "}
                con <strong>{ganadores[0].cantidad_votos}</strong> votos.
              </>
            ) : (
              <>
                <strong>Empate entre:</strong>{" "}
                {ganadores.map((g, i) => (
                  <span key={i}>
                    {g.lista || g.partido} ({g.cantidad_votos} votos)
                    {i < ganadores.length - 1 && ", "}
                  </span>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
