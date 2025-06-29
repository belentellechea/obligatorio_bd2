import "./VoteSummary.css";
import { useNavigate, useLocation } from "react-router-dom";
import { postVoto } from "../../services/votosService";

export default function VoteSummary() {
  const location = useLocation();
  const navigate = useNavigate(); 
  const { votante, tipoVoto, lista, partido } = location.state || {};

  const esVotoEspecial = tipoVoto === "valido_en_blanco" || tipoVoto === "anulado";

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
          <p>
            Tipo de voto: <strong>
              {tipoVoto === "valido_en_blanco" ? "EN BLANCO" : "ANULADO"}
            </strong>
          </p>
        </div>
      ) : (
        <div className="datosContainer">
          <div className="image">
            <img
              src={lista?.image || "./src/assets/listas/default.png"}
              alt="Imagen de la lista"
            />
          </div>
          <div className="voteInfo">
            <p>Lista {lista?.numero}</p>
            <p>{partido?.nombre}</p>
            <p>
              <br />
              Presidente: {lista?.presidente || "N/D"}
              <br />
              Vicepresidente: {lista?.vicepresidente || "N/D"}
            </p>
          </div>
        </div>
      )}

      <div className="buttonsContainer">
        <button className="cancelButton" onClick={() => navigate(-1)}>Cancelar</button>
        <button onClick={handleConfirmarVoto}>Siguiente</button>
      </div>
    </div>
  );
}
