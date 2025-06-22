import "./AdminLogin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../services/usuariosService";

export default function AdminLogin() {
  const [cc,setCc] = useState(""); 
  const [password,setPassword] = useState(""); 
  const navigate = useNavigate(); 

  const handleSubmit = async () => {
    try {
      const data = await loginAdmin({
        CC_miembro_mesa: cc,
        contrasenia: password,
      });

      if (data && !data.error) {
        localStorage.setItem("admin", JSON.stringify(data));
        navigate("/adminHome"); 
      } else {
        alert("Credenciales incorrectas o usuario no encontrado");
      }
    } catch (error) {
      alert("Ocurrió un error al iniciar sesión");
    }
  };

  const handleCancel = () => {
    navigate("/selectUser");
  };

  return (
    <div className="container AdminLogin">
      <div className="titleContainer">
        <img src="../src/assets/icons/badge.svg"></img>
        <div className="UserLogin-titleSubtitle">
          <h1>Bienvenid@</h1>
          <h2>Ingrese sus datos</h2>
        </div>
      </div>
      <div className="formContainer">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="inputContainer">
            <label for="credencial">Credencial</label>
            <input 
            placeholder="Ej.: ABC1234" 
            id="credencial"
            value={cc}
            onChange={(e)=> setCc(e.target.value.toUpperCase().replace(/\s+/g, ""))}></input>
          </div>
          <div className="inputContainer">
            <label for="password">Contraseña</label>
            <input 
            type="password" 
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}></input>
          </div>
        </form>
        <div className="buttonsContainer AdminLogin">
          <button className="cancelButton" onClick={handleCancel}>Volver</button>
          {/* <button disabled className="disabledButton">
            Siguiente
          </button> */}
          <button
            className="nextButton"
            onClick={handleSubmit}
            disabled={!cc || !password}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
