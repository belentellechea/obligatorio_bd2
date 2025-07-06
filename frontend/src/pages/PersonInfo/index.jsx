import "./PersonInfo.css";
import { verificarSiVoto } from "../../services/votantesService";
import { formatearFecha } from "../../utils/formatUtils";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function PersonInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const {votante} = location.state || {};
  const [yaVoto, setYaVoto] = useState(false);

  useEffect(() => {
    const fetchYaVoto = async () => {
      if (votante?.credencial && localStorage.getItem("id_eleccion")) {
        const idEleccion = localStorage.getItem("id_eleccion");
        const result = await verificarSiVoto(votante.credencial, idEleccion);
        setYaVoto(result?.ya_voto === true);
      }
    };
    fetchYaVoto();
  }, [votante]);


  if (!votante) {
    return <p>No se encontró la información del votante.</p>;
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
          {yaVoto && (
              <p className="mensaje-ya-voto">⚠️ Este votante ya ha emitido su voto.</p>
          )}
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
