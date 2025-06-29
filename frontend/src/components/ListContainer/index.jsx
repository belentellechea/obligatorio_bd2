import ListComponent from "../ListComponent";
import "./ListContainer.css";

export default function ListContainer({ data, onPartidoClick }) {
  return (
    <div className="listContainer">
      {data.map((element) => (
        <ListComponent 
          key={element.id}
          title={element.nombre || element.numero} 
          onClick={() => onPartidoClick(element)} 
        />
      ))}
    </div>
  );
}
