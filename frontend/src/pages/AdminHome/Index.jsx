import "./AdminHome.css";
import { useNavigate } from "react-router-dom";

export default function AdminHome() {
  const navigate = useNavigate(); 

  return (
    <div className="container">
      <div className="titleContainer">
        <h1> Hola, Dolores Delano</h1>
        <h2> Elija una opción</h2>
      </div>
      <div className="buttonsContainer AdminHome">
        <button className="voteButton" onClick={()=>navigate("/adminSearch")}>
          <img src="../src/assets/icons/data_loss_prevention.svg"></img>
          <t> Buscar votante</t>
        </button>
        <button className="voteButton" onClick={()=>navigate("/voteResults")}>
          <img src="../src/assets/icons/bar_chart.svg"></img>
          <t> Recuento de votos</t>
        </button>
      </div>
      <button className="cancelButton" onClick={()=>navigate("/adminLogin")}>Volver</button>
    </div>
  );
}
