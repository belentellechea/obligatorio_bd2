import "./AdminHome.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { eleccionActiva, eleccionFinalizada } from "../../utils/eleccionUtils";

export default function AdminHome() {
  const navigate = useNavigate();
  const location = useLocation(); 
  const { admin } = location.state || {}; 
  const [nombreCompleto, setNombreCompleto] = useState("Administrador");

  useEffect(() => {
    if (admin) {
      try {
        const { nombre, apellido } = admin;
        setNombreCompleto(`${nombre} ${apellido}`);
      } catch (error) {
        console.error("Error al leer datos del admin en localStorage", error);
      }
    }
  }, []);

  const handleBuscarVotanteClick = () => {
    // if (eleccionActiva()) {
      navigate("/adminSearch", { state: { admin: admin } });
    // } else {
    //   alert("La elección no está activa. No se puede buscar votantes.");
    // }
  };

  const handleRecuentoVotosClick = () => {
    // if (eleccionFinalizada()) {
      navigate("/voteResults", { state: { admin: admin } });
    // } else {
    //   alert("La elección aún no ha finalizado. No se puede ver el recuento de votos.");
    // }
  };

  return (
    <div className="container">
      <div className="titleContainer">
        <h1> Hola, {nombreCompleto}</h1>
        <h2> Elija una opción</h2>
      </div>
      <div className="buttonsContainer AdminHome">
        <button className="voteButton" onClick={handleBuscarVotanteClick}
        // disabled={!eleccionActiva()}
        >
          <img src="../src/assets/icons/data_loss_prevention.svg"></img>
          <t> Buscar votante</t>
        </button>
        <button className="voteButton" onClick={handleRecuentoVotosClick}
        // disabled={!eleccionFinalizada()}
        >
          <img src="../src/assets/icons/bar_chart.svg"></img>
          <t> Recuento de votos</t>
        </button>
      </div>
      <button className="cancelButton" 
        onClick={() => {
          navigate("/adminLogin")
        }}>
        Volver
      </button>
    </div>
  );
}
