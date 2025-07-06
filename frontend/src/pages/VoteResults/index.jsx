import "./VoteResults.css";
import GraphComponent from "../../components/GraphComponent";
import {
  getReporteListaPartidoPais,
  getReportePartidoPais,
  getReporteListaPartidoDpto,
  getReportePartidoDpto,
  getReporteListaPartidoCircuito,
  getReportePartidoCircuito,
} from "../../services/reportesService";
import { generateColors, formatLabel } from "../../utils/formatUtils";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function VoteResults() {
  const [chartDataLista, setChartDataLista] = useState(null);
  const [chartDataPartido, setChartDataPartido] = useState(null);
  const [filter, setFilter] = useState("pais");
  const [inputValue, setInputValue] = useState("");
  const [idEleccion] = useState(localStorage.getItem("id_eleccion"));
  const navigate = useNavigate();

  useEffect(() => {
  async function fetchData() {
    if (!idEleccion) return;

    try {
      let dataLista = null;
      let dataPartido = null;

      if (filter === "pais") {
        dataLista = await getReporteListaPartidoPais(idEleccion);
        dataPartido = await getReportePartidoPais(idEleccion);
      } else if (filter === "departamento") {
        dataLista = await getReporteListaPartidoDpto(inputValue, idEleccion);
        dataPartido = await getReportePartidoDpto(inputValue, idEleccion);
      } else if (filter === "circuito") {
        // if (!inputValue.trim()) return;
        dataLista = await getReporteListaPartidoCircuito(idEleccion, inputValue);
        dataPartido = await getReportePartidoCircuito(idEleccion, inputValue);
      }

      const extractDataArray = (data) => {
          if (!data) return null;
          if (data.resultados_pais) return data.resultados_pais;
          if (data.resultados_departamento) return data.resultados_departamento;
          if (data.resultados_circuitos) return data.resultados_circuitos;
          return data; 
        };

        const finalDataLista = extractDataArray(dataLista);
        const finalDataPartido = extractDataArray(dataPartido);

      if (finalDataLista && finalDataLista.length > 0) {
        const listaLabels = finalDataLista.map((item) => formatLabel(item.lista));
        const listaData = finalDataLista.map((item) => item.cantidad_votos);

        setChartDataLista({
          labels: listaLabels,
          datasets: [
            {
              label: "# de votos",
              data: listaData,
              backgroundColor: generateColors(listaData.length),
            },
          ],
        });
      }

      if (finalDataPartido && finalDataPartido.length > 0) {
        const partidoLabels = finalDataPartido.map((item) => formatLabel(item.partido));
        const partidoData = finalDataPartido.map((item) => item.cantidad_votos);

        setChartDataPartido({
          labels: partidoLabels,
          datasets: [
            {
              label: "# de votos",
              data: partidoData,
              backgroundColor: generateColors(partidoData.length),
            },
          ],
        });
      }

    } catch (err) {
      console.log("Error al obtener datos de los reportes", err);
    }
  }

  fetchData();
}, [filter, inputValue, idEleccion]);


  return (
    <div className="container VoteResults">
      <div className="titleDashboard">
        <h1>Recuento de votos</h1>
        <div className="dashboard">
          <div className="inputAndFilter">
            <input
                className="searchPerson VoteResults"
                placeholder={`Buscar por ${filter}`}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={filter === "pais"}
              />
            <div className="filterContainer">
              <p className="filterTitle">Filtrar por: </p>
              <div className="filterButtons">
                <button
                  className={`filterResultButton ${filter === "circuito" ? "Selected" : ""}`}
                  onClick={() => setFilter("circuito")}
                >
                  Circuito
                </button>
                <button
                  className={`filterResultButton ${filter === "departamento" ? "Selected" : ""}`}
                  onClick={() => setFilter("departamento")}
                >
                  Departamento
                </button>
                <button
                  className={`filterResultButton ${filter === "pais" ? "Selected" : ""}`}
                  onClick={() => setFilter("pais")}
                >
                  Uruguay
                  </button>
              </div>
            </div>
          </div>
          <div className="graphsContainer">
            <GraphComponent title="Resultados por partido" data={chartDataPartido} />
            <GraphComponent title="Resultados por lista" data={chartDataLista} />
          </div>
        </div>
      </div>
      <button
        className="cancelButton VoteResults"
        onClick={() => navigate("/adminHome")}
      >
        Volver
      </button>
    </div>
  );
}
