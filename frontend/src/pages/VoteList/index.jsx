import ListContainer from "../../components/ListContainer";
import "./VoteList.css";
import { getListaPorPartido } from "../../services/listasService";
import { useNavigate, useLocation } from "react-router-dom";
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
        const camaraSenadores = lista.camaraSenadores || [];
        const camaraRepresentantes = lista.camaraRepresentantes || [];
        const juntaElectoral = lista.juntaElectoral || [];

          return {
            id: lista.id,
            numero: lista.numero,
            presidente: lista.presidente || "N/D",
            vicepresidente: lista.vicepresidente || "N/D",
            camaraSenadores: camaraSenadores, 
            camaraRepresentantes: camaraRepresentantes, 
            juntaElectoral: juntaElectoral, 
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
              tipoVoto: "valido_simple",
              from: "/voteList"
            }
          });
        }}
      />
      <button className="cancelButton" onClick={() => navigate("/voteParty", { state: { votante : votante }})}>
        Volver
      </button>
    </div>
  );
}
