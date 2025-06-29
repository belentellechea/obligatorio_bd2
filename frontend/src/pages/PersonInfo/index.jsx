import "./PersonInfo.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function PersonInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const {votante} = location.state || {};

  if (!votante) {
    return <p>No se encontró la información del votante.</p>;
  }

  function formatearFecha(fechaString) {
    const fecha = new Date(fechaString);
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
    const año = fecha.getFullYear();
    return `${dia}/${mes}/${año}`;
  }

  return (
    <div className="container personInfo">
      <h1>Información del votante</h1>
      <div className="info-container">
        <div className="person-image"></div>
        <div className="person-info">
          <div className="person-info-container">
            <p className="boldText">Nombre:</p>
            <p>{votante.nombre}</p>
          </div>
          <div className="person-info-container">
            <p className="boldText">Apellido:</p>
            <p>{votante.apellido}</p>
          </div>
          <div className="person-info-container">
            <p className="boldText">Credencial:</p>
            <p>{votante.credencial}</p>
          </div>
          <div className="person-info-container">
            <p className="boldText">CI:</p>
            <p>{votante.CI}</p>
          </div>
          <div className="person-info-container">
            <p className="boldText">Fecha de nacimiento:</p>
            <p>{formatearFecha(votante.fecha_nacimiento)}</p>
          </div>
          <div className="person-info-container">
            <p className="boldText">Numero de circuito esperado:</p>
            <p>{votante.numero_circuito_esperado}</p>
          </div>
        </div>
      </div>
      <button
        id="closePersonInfoButton"
        onClick={() => navigate("/adminSearch")}
      >
        Cerrar
      </button>
    </div>
  );
}
