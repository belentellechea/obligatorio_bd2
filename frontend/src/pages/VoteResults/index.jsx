import "./VoteResults.css";
import Chart from "react-chartjs-2";

const chartData = {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      borderColor: "red",
    },
  },
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
            <div className="graph Partido">
              <Chart type="line" data={chartData} />
            </div>
            <div className="graph Lista"></div>
          </div>
        </div>
      </div>
      <button className="cancelButton VoteResults">Volver</button>
    </div>
  );
}
