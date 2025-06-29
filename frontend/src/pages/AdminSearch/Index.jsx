import "./AdminSearch.css";
import { useNavigate } from "react-router-dom";
import { getVotante } from "../../services/votantesService";
import { useState } from "react";

export default function AdminSearch() {
  const navigate = useNavigate();
  const [cc, setCc] = useState("");

  const handleSearch = async () => {
    const id_eleccion = localStorage.getItem("id_eleccion");
    if (!cc || !id_eleccion) {
      alert("Ingrese una credencial válida y asegúrese de tener una elección activa.");
      return;
    }
    const response = await getVotante(cc.trim(), id_eleccion);

    if (response?.votante) {
      navigate("/personInfo", {state: {votante: response.votante}});
    } else {
      alert("Votante no encontrado.");
    }
  };

  return (
    <div className="container AdminSearch">
      <div className="titleContainer">
        <img src="../src/assets/icons/data_loss_prevention_big.svg"></img>
        <div>
          <h1>Buscar votante</h1>
          <h2>Ingrese la credencial del votante</h2>
        </div>
      </div>
      <input 
        className="searchPerson" 
        placeholder="Ejemplo: ABC1234  "
        value={cc}
        onChange={(e)=>setCc(e.target.value)}
        ></input>
      <div className="buttonsContainer AdminLogin">
        <button className="cancelButton" onClick={() => navigate("/adminHome")}>
          Volver
        </button>
        <button className="nextButton"
            onClick={handleSearch}
            disabled={!cc}>
          Buscar
        </button>
      </div>
    </div>
  );
}
