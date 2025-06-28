import ListComponent from "../ListComponent";
import "./ListContainer.css";

export default function ListContainer({ data }) {
  return (
    <div className="listContainer">
      {data.map((element) => (
        <ListComponent title={element.title} />
      ))}
    </div>
  );
}
