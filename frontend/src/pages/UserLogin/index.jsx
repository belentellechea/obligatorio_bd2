import "./UserLogin.css";
import { getVotante, verificarSiVoto } from "../../services/votantesService";
import { eleccionActiva } from "../../utils/eleccionUtils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    const verificacion = await verificarSiVoto(cc, id_eleccion);
    if (verificacion?.ya_voto) {
      alert("Usted ya emitió su voto.");
      return;
    }

    const data = await getVotante(cc, id_eleccion);

    if (data && !data.error) {
      const circuitoActual = localStorage.getItem("numero_circuito");
      const circuitoEsperado = data.votante.numero_circuito_esperado;

      if (parseInt(circuitoActual) !== circuitoEsperado) {
        alert(
          `Atención: usted se encuentra registrado en el circuito ${circuitoEsperado}, pero está votando en el circuito ${circuitoActual}. El voto será observado.`
        );
      }
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
          <button onClick={handleNext} 
          // disabled={!eleccionActiva()}
          >Siguiente</button>
        </div>
      </div>
    </div>
  );
}
