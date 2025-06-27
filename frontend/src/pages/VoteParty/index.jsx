import ListComponent from "../../components/ListComponent";
import ListContainer from "../../components/ListContainer";
import "./VoteParty.css";
import { useNavigate } from "react-router-dom";

const data = [
  {
    title: "Yamandú Orsi",
    partido: "partido Frente Amplio",
    image: "./src/assets/partidos/Logo_Frente_Amplio.png",
  },
  {
    title: "Alvaro Delgado",
    partido: "partido Nacional",
    image: "./src/assets/partidos/Flag_of_the_National_Party_(Uruguay).png",
  },
  {
    title: "Andrés Ojeda",
    partido: "partido Colorado",
    image: "./src/assets/partidos/Flag_of_Colorado_Party_(Uruguay).png",
  },
  {
    title: "Manini Ríos",
    partido: "partido Cablido Abierto",
    image:
      "./src/assets/partidos/Partido_cabildo_abierto_270x180_flag_version.jpg",
  },
  {
    title: "Pablo Mieres",
    partido: "partido Independiente",
    image: "./src/assets/partidos/Bandera_Partido_Independiente.png",
  },
];

export default function VoteParty() {
  const navigate = useNavigate();

  return (
    <div className="container VoteParty">
      <h1> Elige un partido </h1>
      <div className="partyList">
        <ListContainer data={data} />
      </div>

      <button className="cancelButton" onClick={() => navigate("/home")}>
        {" "}
        Volver
      </button>
    </div>
  );
}
