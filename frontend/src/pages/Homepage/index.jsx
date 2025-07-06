import "./Homepage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEleccion } from "../../services/eleccionesService";

export default function Homepage() {
  const navigate = useNavigate(); 
  const [numero, setNumero] = useState("");
  const [tipo, setTipo] = useState("presidencial");
  const [fecha, setFecha] = useState(""); 

  const handleChange = (e) => {
    const soloNumeros = e.target.value.replace(/[^0-9]/g, "");
    setNumero(soloNumeros);
  };

  const handleStart = async () => {
    console.log({tipo,fecha,numero})
    try {
      const data = await getEleccion({tipo,fecha}); 

      if (data && data.ID) {
        localStorage.setItem("id_eleccion", data.ID);
        localStorage.setItem("fecha_inicio", data.fecha_hora_inicio);
        localStorage.setItem("fecha_fin", data.fecha_hora_fin);
        localStorage.setItem("numero_circuito",numero);
        navigate("/selectUser");
      } else {
        alert("No se encontró la elección para esos datos");
      }
    } catch (error) {
      alert("Ocurrió un error al buscar la elección");
    }
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
              <select name="cars" id="cars" className="select-tipoEleccion" 
              value={tipo} onChange={(e)=>setTipo(e.target.value)}>
                <option value="presidencial">Presidencial</option>
                <option value="municipal">Municipal</option>
                <option value="ballotage">Ballotage</option>
                <option value="referendum/plebiscito">Plebiscito/Referéndum</option>
              </select>
            </div>
            <div className="select">
              <label className="labelCircuito"> Fecha</label>
              <input type="date" value={fecha} onChange={(e)=>setFecha(e.target.value)}></input>
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
          onClick={handleStart}
        >
          Comenzar
        </button>
      </div>
    </div>
  );
}
