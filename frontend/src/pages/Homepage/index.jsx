import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="homeContainer">
      <div className="container">
        <div className="titulo-logo">
          <div className="logo-isologo">
            <img
              className="isologoPresidencia"
              src="../src/assets/isologo-presidencia.svg"
            ></img>
            <img
              className="tipografia"
              src="../src/assets/tipografia.svg"
            ></img>
          </div>
          <div className="titulo-subtitulo">
            <h1 className="title"> Elecciones Presidenciales </h1>
            <h2 className="subtitle"> Período 2025</h2>
          </div>
        </div>
        <button>Comenzar</button>
      </div>
    </div>
  );
}
