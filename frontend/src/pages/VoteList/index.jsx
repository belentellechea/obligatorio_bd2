import ListContainer from "../../components/ListContainer";
import "./VoteList.css";
import { useNavigate, useLocation } from "react-router-dom";
import { getListaPorPartido } from "../../services/listasService";
import { useState, useEffect } from "react";

export default function VoteList() {
  const navigate = useNavigate();
  const location = useLocation(); 
  const {votante,partido} = location.state || {};
  const [listas, setListas] = useState([]);

  if (!votante || !partido) return <p>Datos incompletos</p>

  useEffect(() => {
    const fetchListas = async () => {
      const id_eleccion = localStorage.getItem("id_eleccion");
      if (!id_eleccion || !partido?.id) {
        console.error("Faltan datos para obtener listas");
        return;
      }

      try {
        const data = await getListaPorPartido(partido.id, id_eleccion);
        const listasConImagen = data.listas.map((lista) => {
        const presidente = lista.candidatos.find(c => c.organo === "presidencia");
        const vicepresidente = lista.candidatos.find(c => c.organo === "vicepresidencia");

        return {
          id: lista.id,
          numero: lista.numero,
          presidente: presidente ? `${presidente.nombre} ${presidente.apellido}` : "N/D",
          vicepresidente: vicepresidente ? `${vicepresidente.nombre} ${vicepresidente.apellido}` : "N/D",
          image: "./src/assets/listas/default.png"
        };
      });
      setListas(listasConImagen);
      } catch (error) {
        console.error("Error al cargar listas:", error);
      }
    };

    fetchListas();
  }, [partido]);

  return (
    <div className="container">
      <h1> Elija una lista</h1>
      <ListContainer 
        data={listas} 
        onPartidoClick={(listaSeleccionada) => {
          navigate("/voteSummary", {
            state: {
              votante,
              lista: listaSeleccionada,
              partido,
              tipoVoto: "valido_simple"
            }
          });
        }}
      />
      <button className="cancelButton" onClick={() => navigate("/voteParty")}>
        Volver
      </button>
    </div>
  );
}
