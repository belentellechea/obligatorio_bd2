import "./UserHome.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function UserHome() {
  const navigate = useNavigate();
  const location = useLocation();
  const { votante } = location.state || {};
  const [tipoVoto, setTipoVoto] = useState("");

  if (!votante) {
    return (
      <div className="container errorUser">
        <div className="errorInfo">
          <img src="./src/assets/icons/sadFace.svg"></img>
          <h1>Error</h1>
          <p>No se encontraron los datos del votante.</p>
        </div>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Volver a inicio
        </button>
      </div>
    );
  }

  const handleVoto = (tipo) => {
    setTipoVoto(tipo);

    if (tipo === "valido_simple") {
      navigate("/voteParty", {
        state: { votante, tipoVoto: tipo },
      });
    } else {
      navigate("/voteSummary", {
        state: { votante, tipoVoto: tipo },
      });
    }
  };

  return (
    <div className="container UserHome">
      <div className="titleContainer">
        <h1>
          Hola, {votante.nombre} {votante.apellido}
        </h1>
        <h2>¿Cómo va a votar?</h2>
      </div>
      <div className="buttonsContainer">
        <button
          className="voteButton"
          onClick={() => handleVoto("valido_en_blanco")}
        >
          <img src="../src/assets/icons/unsubscribe.svg"></img>
          <t>Voto en blanco</t>
        </button>
        <button
          className="voteButton"
          onClick={() => handleVoto("valido_simple")}
        >
          <img src="../src/assets/icons/article_person.svg"></img>
          <t>Voto una lista</t>
        </button>
        <button className="voteButton" onClick={() => handleVoto("anulado")}>
          <img src="../src/assets/icons/cancel.svg"></img>
          <t>Voto anulado</t>
        </button>
      </div>
      <button className="cancelButton" onClick={() => navigate("/login")}>
        Cancelar
      </button>
    </div>
  );
}
