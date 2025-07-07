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
import { useNavigate, useLocation } from "react-router-dom";
import { useCallback } from "react";

export default function VoteResults() {
  const [chartDataLista, setChartDataLista] = useState(null);
  const [chartDataPartido, setChartDataPartido] = useState(null);
  const [filter, setFilter] = useState("pais");
  const [inputValue, setInputValue] = useState("");
  const [idEleccion] = useState(localStorage.getItem("id_eleccion"));
  const navigate = useNavigate();
  const location = useLocation();
  const { admin } = location.state || {};
  const [ganadorLista, setGanadorLista] = useState(null);
  const [ganadorPartido, setGanadorPartido] = useState(null);
  const [placeholder, setPlaceholder] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const fetchData = useCallback(
    async (customInputValue) => {
      const currentInput =
        customInputValue !== undefined ? customInputValue : inputValue;

      if (!idEleccion) return;

      try {
        let dataLista = null;
        let dataPartido = null;
        setErrorMsg("");

        if (filter === "pais") {
          dataLista = await getReporteListaPartidoPais(idEleccion);
          dataPartido = await getReportePartidoPais(idEleccion);
        } else if (filter === "departamento") {
          dataLista = await getReporteListaPartidoDpto(
            currentInput,
            idEleccion
          );
          dataPartido = await getReportePartidoDpto(currentInput, idEleccion);
        } else if (filter === "circuito") {
          dataLista = await getReporteListaPartidoCircuito(
            idEleccion,
            currentInput
          );
          dataPartido = await getReportePartidoCircuito(
            idEleccion,
            currentInput
          );
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

        if (
          (!finalDataLista || finalDataLista.length === 0) &&
          (!finalDataPartido || finalDataPartido.length === 0)
        ) {
          setErrorMsg("No se encontraron resultados para ese filtro.");
          setChartDataLista(null);
          setChartDataPartido(null);
          setGanadorLista(null);
          setGanadorPartido(null);
          return;
        }

        if (finalDataLista && finalDataLista.length > 0) {
          const listaLabels = finalDataLista.map((item) =>
            formatLabel(item.lista)
          );
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

          const dataFiltrada = finalDataLista.filter(
            (item) =>
              item.lista !== "anulado" && item.lista !== "valido_en_blanco"
          );

          if (dataFiltrada.length > 0) {
            const maxVotos = Math.max(
              ...dataFiltrada.map((item) => item.cantidad_votos)
            );
            const ganadores = dataFiltrada.filter(
              (item) => item.cantidad_votos === maxVotos
            );
            setGanadorLista(ganadores);
          } else {
            setGanadorLista([]);
          }
        }

        if (finalDataPartido && finalDataPartido.length > 0) {
          const partidoLabels = finalDataPartido.map((item) =>
            formatLabel(item.partido)
          );
          const partidoData = finalDataPartido.map(
            (item) => item.cantidad_votos
          );

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

          const dataFiltrada = finalDataPartido.filter(
            (item) =>
              item.partido !== "anulado" && item.partido !== "valido_en_blanco"
          );

          if (dataFiltrada.length > 0) {
            const maxVotos = Math.max(
              ...dataFiltrada.map((item) => item.cantidad_votos)
            );
            const ganadores = dataFiltrada.filter(
              (item) => item.cantidad_votos === maxVotos
            );
            setGanadorPartido(ganadores);
          } else {
            setGanadorPartido([]);
          }
        }
      } catch (err) {
        console.log("Error al obtener datos de los reportes", err);
      }
    },
    [filter, idEleccion]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    switch (filter) {
      case "circuito":
        setPlaceholder('Buscar por circuito, Ej: "2"');
        break;
      case "departamento":
        setPlaceholder('Buscar por departamento, Ej: "Artigas"');
        break;
      case "pais":
      default:
        setPlaceholder("");
        break;
    }
  }, [filter]);

  return (
    <div className="container VoteResults">
      <div className="titleDashboard">
        <h1>Recuento de votos</h1>
        <div className="dashboard">
          <div className="inputAndFilter">
            <div className="inputAndButton">
              <input
                className={`searchPerson VoteResults ${
                  filter === "pais" ? "disabledInput" : ""
                }`}
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  // setErrorMsg("");
                }}
                disabled={filter === "pais"}
              />
              <button
                className="searchPersonButtonS"
                onClick={() => fetchData(inputValue)}
              >
                <img
                  className="searchPersonButtonIcon"
                  src="./src/assets/icons/search.svg"
                />
              </button>
            </div>
            <div className="filterContainer">
              <p className="filterTitle">Filtrar por: </p>
              <div className="filterButtons">
                <button
                  className={`filterResultButton ${
                    filter === "circuito" ? "Selected" : ""
                  }`}
                  onClick={() => setFilter("circuito")}
                >
                  Circuito
                </button>
                <button
                  className={`filterResultButton ${
                    filter === "departamento" ? "Selected" : ""
                  }`}
                  onClick={() => setFilter("departamento")}
                >
                  Departamento
                </button>
                <button
                  className={`filterResultButton ${
                    filter === "pais" ? "Selected" : ""
                  }`}
                  onClick={() => setFilter("pais")}
                >
                  Uruguay
                </button>
              </div>
            </div>
          </div>
          <div className="graphsContainer">
            <GraphComponent
              title="Resultados por partido"
              data={chartDataPartido}
              ganadores={ganadorPartido}
              errorMsg={errorMsg}
            />
            <GraphComponent
              title="Resultados por lista"
              data={chartDataLista}
              ganadores={ganadorLista}
              errorMsg={errorMsg}
            />
          </div>
        </div>
      </div>
      <button
        className="cancelButton VoteResults"
        onClick={() => navigate("/adminHome", { state: { admin: admin } })}
      >
        Volver
      </button>
    </div>
  );
}
