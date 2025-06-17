import "./VoteResults.css";

export default function VoteResults() {
  return (
    <div className="container VoteResults">
      <h1>Recuento de votos</h1>
      <div className="dashboard">
        <div className="inputAndFilter">
          <input
            className="searchPerson"
            placeholder="Buscar por número de circuito"
          ></input>
          <div>
            <t>filtrar por</t>
          </div>
        </div>
      </div>
      <button className="cancelButton">Volver</button>
    </div>
  );
}
