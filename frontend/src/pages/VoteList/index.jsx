import ListContainer from "../../components/ListContainer";
import "./VoteList.css";
import { useNavigate } from "react-router-dom";

const listas = [
  {
    title: "Lista 2050",
    image: "",
  },
  {
    title: "Lista 609",
    image: "",
  },
  {
    title: "Lista 404",
    image: "",
  },
  {
    title: "Lista 77",
    image: "",
  },
  {
    title: "Lista 10",
    image: "",
  },
  {
    title: "Lista 8",
    image: "",
  },
  {
    title: "Lista 2121",
    image: "",
  },
  {
    title: "Lista 19",
    image: "",
  },
  {
    title: "Lista 71",
    image: "",
  },
];

export default function VoteList() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1> Elija una lista</h1>
      <ListContainer data={listas} />
      <button className="cancelButton" onClick={() => useNavigate("/userHome")}>
        Volver
      </button>
    </div>
  );
}
