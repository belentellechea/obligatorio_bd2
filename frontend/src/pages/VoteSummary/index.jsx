import "./VoteSummary.css";
import { useNavigate, useLocation } from "react-router-dom";
import { postVoto } from "../../services/votosService";

export default function VoteSummary() {
  const location = useLocation();
  const navigate = useNavigate();
  const { votante, tipoVoto, lista, partido, from } = location.state || {};

  const imagenesPartidos = {
    "Frente Amplio": "./src/assets/partidos/Logo_Frente_Amplio.png",
    "Partido Nacional":
      "./src/assets/partidos/Flag_of_the_National_Party_(Uruguay).png",
    "Partido Colorado":
      "./src/assets/partidos/Flag_of_Colorado_Party_(Uruguay).png",
    "Cabildo Abierto":
      "./src/assets/partidos/Partido_cabildo_abierto_270x180_flag_version.jpg",
  };

  const esVotoEspecial =
    tipoVoto === "valido_en_blanco" || tipoVoto === "anulado";

  const logoPartido =
    imagenesPartidos[partido?.nombre] || "./src/assets/partidos/default.png";

  const handleConfirmarVoto = async () => {
    try {
      const id_sobre = crypto.randomUUID();

      const id_eleccion = localStorage.getItem("id_eleccion");
      const circuitoActual = localStorage.getItem("numero_circuito");
      const circuitoEsperado = votante.numero_circuito_esperado;
      const observado = parseInt(circuitoActual) !== circuitoEsperado;

      const payload = {
        numero_circuito_vota: circuitoActual,
        tipo: tipoVoto,
        observado,
        cc_votante: votante.credencial,
        id_eleccion,
        id_sobre,
      };

      if (!esVotoEspecial) {
        if (!lista?.id) {
          alert("No se encontró el ID de la papeleta.");
          return;
        }
        payload.id_papeleta = lista.id;
      }

      const result = await postVoto(payload);

      if (result) {
        navigate("/voteSuccess");
      }
    } catch (error) {
      console.error("Error al confirmar voto:", error);
      alert("Hubo un error al registrar el voto.");
    }
  };

  return (
    <div className="container VoteSummary">
      <div>
        <h1>Resumen de votación</h1>
        <h2>Verifica que los datos sean correctos.</h2>
      </div>

      {esVotoEspecial ? (
        <div className="voteInfo">
          <div className="animatedEnvelopeContainer">
            <div class="letter-image">
              <div class="animated-mail">
                <div class="back-fold"></div>
                <div class="letter">
                  <div class="letter-border"></div>
                  <div class="letter-title">
                    <p>
                      {tipoVoto === "valido_en_blanco"
                        ? "Voto en blanco"
                        : "Voto anulado"}
                    </p>
                  </div>
                  <div class="letter-context"></div>
                  <div class="letter-stamp">
                    <div class="letter-stamp-inner"></div>
                  </div>
                </div>
                <div class="top-fold"></div>
                <div class="envelopeBody"></div>
                <div class="left-fold"></div>
              </div>
              <div class="shadow"></div>
            </div>
          </div>
          <div className="votoEspecialTexto">
            <p>
              Tipo de voto:{" "}
              <strong>
                {tipoVoto === "valido_en_blanco" ? "EN BLANCO" : "ANULADO"}
              </strong>
            </p>
          </div>
        </div>
      ) : (
        <div className="datosContainer">
          <div className="animatedEnvelopeContainer">
            <div class="letter-image">
              <div class="animated-mail">
                <div class="back-fold"></div>
                <div class="letter">
                  <div class="letter-border"></div>
                  <div class="letter-title">
                    <p>Lista {lista?.numero}</p>
                  </div>
                  <div class="letter-context">
                    <p>{partido?.nombre}</p>
                  </div>
                  <div class="partyImageEnvelopeContainer">
                    <img
                      src={logoPartido}
                      alt="Logo del partido"
                      className="partyImageEnvelope"
                    />
                  </div>
                </div>
                <div class="top-fold"></div>
                <div class="envelopeBody"></div>
                <div class="left-fold"></div>
              </div>
              <div class="shadow"></div>
            </div>
          </div>
          <div className="voteInfo">
            <h3>Lista {lista?.numero}</h3>
            <h4>{partido?.nombre}</h4>
            <p>
              <p />
              Presidente: {lista?.presidente || "N/D"}
              <p />
              Vicepresidente: {lista?.vicepresidente || "N/D"}
              <p />
              <div className="infoSecundaria">
                <span>Cámara de Senadores:</span>{" "}
                {lista?.camaraSenadores?.length > 0
                  ? lista.camaraSenadores.join(", ")
                  : "N/D"}
                <p />
                <span>Cámara de Representantes:</span>{" "}
                {lista?.camaraRepresentantes?.length > 0
                  ? lista.camaraRepresentantes.join(", ")
                  : "N/D"}
                <p />
                <span>Junta Electoral:</span>{" "}
                {lista?.juntaElectoral?.length > 0
                  ? lista.juntaElectoral.join(", ")
                  : "N/D"}
              </div>
            </p>
          </div>
        </div>
      )}

      <div className="buttonsContainer">
        <button
          className="cancelButton"
          onClick={() =>
            navigate(from, {
              state: {
                votante,
                ...(from === "/voteList" && { partido }),
              },
            })
          }
        >
          Cancelar
        </button>
        <button onClick={handleConfirmarVoto}>Siguiente</button>
      </div>
    </div>
  );
}
