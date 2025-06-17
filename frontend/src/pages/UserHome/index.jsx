import "./UserHome.css";

export default function UserHome() {
  return (
    <div className="container UserHome">
      <div className="titleContainer">
        <h1>Hola, Elsa Capunta</h1>
        <h2>¿Cómo va a votar?</h2>
      </div>
      <div className="buttonsContainer">
        <button className="voteButton">
          <img src="../src/assets/icons/unsubscribe.svg"></img>
          <t>Voto en blanco</t>
        </button>
        <button className="voteButton">
          <img src="../src/assets/icons/article_person.svg"></img>
          <t>Voto una lista</t>
        </button>
        <button className="voteButton">
          <img src="../src/assets/icons/cancel.svg"></img>
          <t>Voto anulado</t>
        </button>
      </div>
      <button className="cancelButton">Cancelar</button>
    </div>
  );
}
