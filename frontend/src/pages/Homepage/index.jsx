import "./Homepage.css";
import { useState } from "react";

export default function Homepage() {
  const [numero, setNumero] = useState("");

  const handleChange = (e) => {
    const soloNumeros = e.target.value.replace(/[^0-9]/g, "");
    setNumero(soloNumeros);
  };

  return (
    <div className="homeContainer">
      <div className="container">
        <div className="titulo-logo">
          <div className="logo-isologo">
            <img
              className="isologoPresidencia"
              src="../src/assets/isologo-presidencia.svg"
            ></img>
            <img
              className="tipografia"
              src="../src/assets/tipografia.svg"
            ></img>
          </div>
          <div className="titulo-subtitulo">
            <h1 className="title"> Elecciones Presidenciales </h1>
            <h2 className="subtitle"> Período 2025</h2>
          </div>
        </div>
        <div className="buscarCircuitoInput">
          <label for="buscarCircuito" className="labelNroCircuito">
            Ingrese el número del circuito
          </label>
          <input
            id="buscarCircuito"
            type="number"
            value={numero}
            onChange={handleChange}
          ></input>
        </div>
        <button>Comenzar</button>
      </div>
    </div>
  );
}
