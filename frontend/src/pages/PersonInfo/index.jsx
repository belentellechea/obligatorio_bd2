import "./PersonInfo.css";
import { useNavigate } from "react-router-dom";

export default function PersonInfo() {
  const navigate = useNavigate();

  return (
    <div className="container personInfo">
      <h1>Información del votante</h1>
      <div className="info-container">
        <div className="person-image"></div>
        <div className="person-info">
          <div className="person-info-container">
            <p className="boldText">Nombre:</p>
            <p>Esteban</p>
          </div>
          <div className="person-info-container">
            <p className="boldText">Apellido:</p>
            <p>Quito</p>
          </div>
          <div className="person-info-container">
            <p className="boldText">Credencial:</p>
            <p>5438250-2</p>
          </div>
          <div className="person-info-container">
            <p className="boldText">CI:</p>
            <p>5438250-2</p>
          </div>
          <div className="person-info-container">
            <p className="boldText">CI:</p>
            <p>12/3/1998</p>
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
