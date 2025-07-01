import ListContainer from "../../components/ListContainer";
import "./VoteParty.css";
import { useNavigate, useLocation } from "react-router-dom";
import { getPartidos } from "../../services/partidosService";
import { useState, useEffect } from "react";

export default function VoteParty() {
  const navigate = useNavigate();
  const location = useLocation();
  const { votante } = location.state || {};
  const [partidos, setPartidos] = useState([]);
  const [loading, setLoading] = useState(true);

  const imagenesPartidos = {
    "Frente Amplio": "./src/assets/partidos/Logo_Frente_Amplio.png",
    "Partido Nacional":
      "./src/assets/partidos/Flag_of_the_National_Party_(Uruguay).png",
    "Partido Colorado":
      "./src/assets/partidos/Flag_of_Colorado_Party_(Uruguay).png",
    "Cabildo Abierto":
      "./src/assets/partidos/Partido_cabildo_abierto_270x180_flag_version.jpg",
  };

  useEffect(() => {
    const fetchPartidos = async () => {
      try {
        const idEleccion = localStorage.getItem("id_eleccion");
        const data = await getPartidos(idEleccion);
        const partidosConImagen = data.partidos.map((partido) => ({
          id: partido.ID,
          nombre: partido.nombre,
          image:
            imagenesPartidos[partido.nombre] ||
            "./src/assets/partidos/default.png",
        }));
        setPartidos(partidosConImagen);
      } catch (error) {
        console.error("Error al obtener partidos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartidos();
  }, []);

  if (loading) return <div className="container">Cargando</div>;

  if (!votante) {
    return <p>No se encontraron los datos del votante.</p>;
  }

  const handlePartidoClick = (partido) => {
    navigate("/voteList", {
      state: {
        votante,
        partido,
      },
    });
  };

  return (
    <div className="container VoteParty">
      <h1> Elige un partido </h1>
      <div className="partyList">
        <ListContainer data={partidos} onPartidoClick={handlePartidoClick} />
      </div>

      <button
        className="cancelButton"
        onClick={() => {
          localStorage.removeItem("votante");
          navigate("/login");
        }}
      >
        {" "}
        Volver
      </button>
    </div>
  );
}
