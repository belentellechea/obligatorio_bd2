import "./AdminSearch.css";

export default function AdminSearch() {
  return (
    <div className="container AdminSearch">
      <div className="titleContainer">
        <img src="../src/assets/icons/data_loss_prevention_big.svg"></img>
        <div>
          <h1>Buscar votante</h1>
          <h2>Ingrese la credencial del votante</h2>
        </div>
      </div>
      <input className="searchPerson" placeholder="Ejemplo: ABC 1234  "></input>
      <button className="cancelButton">Volver</button>
    </div>
  );
}
