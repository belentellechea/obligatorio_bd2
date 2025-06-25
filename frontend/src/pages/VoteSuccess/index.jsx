import "./VoteSuccess.css";
import { useNavigate } from "react-router-dom";

export default function VoteSuccess() {
  const navigate = useNavigate();

  return (
    <div className="container VoteSuccess">
      <div className="title-icon-container">
        <h1 className="successTitle">
          <div class="success-animation">
            <svg
              class="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                class="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                class="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
          Su voto ha sido registrado correctamente
        </h1>
      </div>
      <button onClick={() => navigate("/login")}>Cerrar</button>
    </div>
  );
}
