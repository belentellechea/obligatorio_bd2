import "./AdminHome.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function AdminHome() {
  const navigate = useNavigate();
  const [nombreCompleto, setNombreCompleto] = useState("Administrador");

  useEffect(() => {
    const storedAdmin = localStorage.getItem("admin");
    if (storedAdmin) {
      try {
        const adminData = JSON.parse(storedAdmin);
        const { nombre, apellido } = adminData.usuario;
        setNombreCompleto(`${nombre} ${apellido}`);
      } catch (error) {
        console.error("Error al leer datos del admin en localStorage", error);
      }
    }
  }, []);

  return (
    <div className="container">
      <div className="titleContainer">
        <h1> Hola, {nombreCompleto}</h1>
        <h2> Elija una opción</h2>
      </div>
      <div className="buttonsContainer AdminHome">
        <button className="voteButton" onClick={() => navigate("/adminSearch")}>
          <img src="../src/assets/icons/data_loss_prevention.svg"></img>
          <t> Buscar votante</t>
        </button>
        <button className="voteButton" onClick={() => navigate("/voteResults")}>
          <img src="../src/assets/icons/bar_chart.svg"></img>
          <t> Recuento de votos</t>
        </button>
      </div>
      <button className="cancelButton" 
        onClick={() => {
          localStorage.removeItem("admin");
          navigate("/adminLogin")
        }}>
        Volver
      </button>
    </div>
  );
}
