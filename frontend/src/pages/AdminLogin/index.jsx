import "./AdminLogin.css";

export default function AdminLogin() {
  return (
    <div className="container AdminLogin">
      <div className="titleContainer">
        <img src="../src/assets/icons/badge.svg"></img>
        <div className="UserLogin-titleSubtitle">
          <h1>Bienvenid@</h1>
          <h2> Ingrese sus datos</h2>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <div className="inputContainer">
            <label for="credencial">Credencial</label>
            <input placeholder="Ej: ABC1234" id="credencial"></input>
          </div>
          <div className="inputContainer">
            <label for="password">Contraseña</label>
            <input type="password" id="password"></input>
          </div>
        </form>
        <div className="buttonsContainer AdminLogin">
          <button className="cancelButton">Volver</button>
          <button disabled className="disabledButton">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
