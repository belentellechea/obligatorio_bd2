import ListComponent from "../../components/ListComponent";
import "./VoteParty.css";
import { useNavigate } from "react-router-dom";
import { getPartidos } from "../../services/partidosService";
import { useState,useEffect } from "react";

export default function VoteParty() {
  const navigate = useNavigate();
  const [partidos, setPartidos] = useState([]); 

   const imagenesPartidos = {
    "Frente Amplio": "./src/assets/partidos/Logo_Frente_Amplio.png",
    "Partido Nacional": "./src/assets/partidos/Flag_of_the_National_Party_(Uruguay).png",
    "Partido Colorado": "./src/assets/partidos/Flag_of_Colorado_Party_(Uruguay).png",
    "Cabildo Abierto": "./src/assets/partidos/Partido_cabildo_abierto_270x180_flag_version.jpg",
  };

  useEffect(() => {
    const fetchPartidos = async () => {
      try {
        const idEleccion = localStorage.getItem("id_eleccion"); 
        const data = await getPartidos(idEleccion);
        const partidosConImagen = data.partidos.map((partido) => ({
          id: partido.ID,
          nombre: partido.nombre,
          image: imagenesPartidos[partido.nombre] || "./src/assets/partidos/default.png",
        }));
        setPartidos(partidosConImagen);
      } catch (error) {
        console.error("Error al obtener partidos:", error);
      }
    };

    fetchPartidos();
  }, []);

  return (
    <div className="container VoteParty">
      <h1> Elige un partido </h1>
      <div className="partyList">
        {partidos.length > 0 && partidos.map((partido, index) => (
          <ListComponent
            key={index}
            title={partido.nombre}
            imageUrl={partido.image}
          />
        ))}
      </div>

      <button className="cancelButton" 
      onClick={() => {
        localStorage.removeItem("votante"); 
        navigate("/login")
      }}>
        {" "}
        Volver
      </button>
    </div>
  );
}
