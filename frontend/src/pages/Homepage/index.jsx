import "./Homepage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const [numero, setNumero] = useState("");

  const handleChange = (e) => {
    const soloNumeros = e.target.value.replace(/[^0-9]/g, "");
    setNumero(soloNumeros);
  };

  return (
    <div className="homeContainer">
      <div className="container homePage">
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
            <h1 className="title"> Sistema de elecciones</h1>
          </div>
        </div>
        <div className="inputSelect-container">
          <div className="select-tipoFecha">
            <div className="select">
              <label className="labelCircuito"> Tipo de elección</label>
              <select name="cars" id="cars" className="select-tipoEleccion">
                <option value="volvo">Presidencial</option>
                <option value="audi">Municipal</option>
                <option value="saab">Ballotage</option>
                <option value="mercedes">Plebicito/Referéndum</option>
              </select>
            </div>
            <div className="select">
              <label className="labelCircuito"> Fecha</label>
              <input type="date"></input>
            </div>
          </div>
          <div className="buscarCircuitoInput">
            <label for="buscarCircuito" className="labelCircuito">
              Número del circuito
            </label>
            <input
              id="buscarCircuito"
              type="number"
              value={numero}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/selectUser");
          }}
        >
          Comenzar
        </button>
      </div>
    </div>
  );
}
