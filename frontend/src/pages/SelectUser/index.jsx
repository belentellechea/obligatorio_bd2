import "./SelectUser.css";

export default function SelectUser() {
  return (
    <div className="container selectUser">
      <div className="selectUser-content">
        <h1> Elija un perfil</h1>
        <div className="selectUser-buttonsContainer">
          <div className="selectUser-button">
            <button>
              <img src="../src/assets/icons/how_to_vote.svg"></img>
            </button>
            <t>Votante</t>
          </div>
          <div className="selectUser-button">
            <button>
              <img src="../src/assets/icons/manage_accounts.svg"></img>
            </button>
            <t>administrador</t>
          </div>
        </div>
      </div>
    </div>
  );
}
