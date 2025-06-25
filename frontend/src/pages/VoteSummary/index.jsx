import "./VoteSummary.css";

export default function VoteSummary() {
  return (
    <div className="container VoteSummary">
      <div>
        <h1>Resumen de votación</h1>
        <h2>Verifica que los datos sean correctos.</h2>
      </div>
      <div className="datosContainer">
        <div className="image"></div>
        <div className="voteInfo">
          <p>Lista 902</p>
          <p>Partido Nacional</p>
          <p>Candidato Jonny Mebaño</p>
        </div>
      </div>
      <div className="buttonsContainer">
        <button className="cancelButton">Cancelar</button>
        <button>Siguiente</button>
      </div>
    </div>
  );
}
