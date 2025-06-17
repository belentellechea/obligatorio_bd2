import "./UserLogin.css";

export default function UserLogin() {
  return (
    <div className="container userLogin">
      <div className="UserLogin-titleContainer">
        <img src="../src/assets/icons/badge.svg"></img>
        <div className="UserLogin-titleSubtitle">
          <h1> Bienvenid@</h1>
          <h2> Ingrese su credencial</h2>
        </div>
      </div>
      <div className="UserLogin-inputButtonsContainer">
        <input placeholder="Ejemplo: ABC-1234  "></input>
        <div className="buttonsContainer UserLogin">
          <button className="cancelButton">Cancelar</button>
          <button>Siguiente</button>
        </div>
      </div>
    </div>
  );
}
