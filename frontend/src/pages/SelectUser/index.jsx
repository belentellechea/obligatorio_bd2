import "./SelectUser.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SelectUser() {
  const navigate = useNavigate(); 

  // useEffect(() => {
  //   localStorage.clear();
  // }, []);

  const handleVotanteClick = () => {
    navigate("/login");
  };

  const handleAdminClick = () => {
    navigate("/adminLogin");
  };

  return (
    <div className="container selectUser">
      <div className="selectUser-content">
        <h1> Elija un perfil</h1>
        <div className="selectUser-buttonsContainer">
          <div className="selectUser-button">
            <button onClick={handleVotanteClick}>
              <img src="../src/assets/icons/how_to_vote.svg"></img>
            </button>
            <t>Votante</t>
          </div>
          <div className="selectUser-button">
            <button onClick={handleAdminClick}>
              <img src="../src/assets/icons/manage_accounts.svg"></img>
            </button>
            <t>Administrador</t>
          </div>
        </div>
      </div>
    </div>
  );
}
