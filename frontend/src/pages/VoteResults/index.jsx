import "./VoteResults.css";
import GraphComponent from "../../components/graphComponent";

const chartData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
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

export default function VoteResults() {
  return (
    <div className="container VoteResults">
      <div className="titleDashboard">
        <h1>Recuento de votos</h1>
        <div className="dashboard">
          <div className="inputAndFilter">
            <input
              className="searchPerson VoteResults"
              placeholder="Buscar por número de circuito"
            ></input>
            <div className="filterContainer">
              <p className="filterTitle">Filtrar por: </p>
              <div className="filterButtons">
                <button className="filterResultButton Selected">
                  {" "}
                  Circuito{" "}
                </button>
                <button className="filterResultButton"> Departamento </button>
                <button className="filterResultButton"> Uruguay </button>
              </div>
            </div>
          </div>
          <div className="graphsContainer">
            <GraphComponent title="Resultados por partido" data={chartData} />
            <GraphComponent title="Resultados por lista" data={chartData} />
          </div>
        </div>
      </div>
      <button className="cancelButton VoteResults">Volver</button>
    </div>
  );
}
