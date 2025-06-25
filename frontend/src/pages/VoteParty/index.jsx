import ListComponent from "../../components/listComponent";
import "./VoteParty.css";

const data = [
  {
    candidato: "Yamandú Orsi",
    partido: "partido Frente Amplio",
    image: "./src/assets/partidos/Logo_Frente_Amplio.png",
  },
  {
    candidato: "Alvaro Delgado",
    partido: "partido Nacional",
    image: "./src/assets/partidos/Flag_of_the_National_Party_(Uruguay).png",
  },
  {
    candidato: "Andrés Ojeda",
    partido: "partido Colorado",
    image: "./src/assets/partidos/Flag_of_Colorado_Party_(Uruguay).png",
  },
  {
    candidato: "Manini Ríos",
    partido: "partido Cablido Abierto",
    image:
      "./src/assets/partidos/Partido_cabildo_abierto_270x180_flag_version.jpg",
  },
  {
    candidato: "Pablo Mieres",
    partido: "partido Independiente",
    image: "./src/assets/partidos/Bandera_Partido_Independiente.png",
  },
];

export default function VoteParty() {
  return (
    <div className="container VoteParty">
      <h1> Elige un partido </h1>
      <div className="partyList">
        {data.map((element, index) => (
          <ListComponent
            key={index}
            title={element.partido}
            imageUrl={element.image}
          />
        ))}
      </div>

      <button className="cancelButton"> Volver</button>
    </div>
  );
}
