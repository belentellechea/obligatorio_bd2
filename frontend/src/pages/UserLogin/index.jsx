import "./UserLogin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getVotante } from "../../services/votantesService";
import { eleccionActiva } from "../../utils/eleccionUtils";

export default function UserLogin() {
  const [cc,setCc] = useState(""); 
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    setCc(e.target.value.toUpperCase().replace(/\s+/g, "")); 
  }

  const handleNext = async () => {
    const id_eleccion = localStorage.getItem("id_eleccion");

    if (!cc || !id_eleccion) {
      alert("Debe ingresar la credencial y tener una elección activa");
      return;
    }

    const data = await getVotante(cc, id_eleccion);

    if (data && !data.error) {
      navigate("/userHome", { state: { votante: data.votante } });
    } else {
      alert("No se encontró un votante con esa credencial para esta elección");
    }
  }

  const handleCancel = () => {
    navigate("/selectUser"); 
  };

  return (
    <div className="container userLogin">
      <div className="UserLogin-titleContainer">
        <img src="../src/assets/icons/badge.svg"></img>
        <div className="UserLogin-titleSubtitle">
          <h1> Bienvenid@</h1>
          <h2> Ingrese su credencial</h2>
        </div>
      </div>
      <div className="UserLogin-inputButtonsContainer">
        <input placeholder="Ejemplo: ABC1234"
        value={cc}
        onChange={handleInputChange}
        ></input>
        <div className="buttonsContainer UserLogin">
          <button className="cancelButton" onClick={handleCancel}>Cancelar</button>
          <button onClick={handleNext} disabled={!eleccionActiva()}>Siguiente</button>
        </div>
      </div>
    </div>
  );
}
