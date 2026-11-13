import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css";

function EjHittad() {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <p className="not-found-code">404</p>
      <h1>Sidan finns inte</h1>
      <p>Adressen kan vara felstavad, eller så har sidan flyttats.</p>

      <div className="not-found-buttons">
        <Link className="hero-button" to="/">Till startsidan</Link>
        <button onClick={() => navigate(-1)}>Gå tillbaka</button>
      </div>
    </section>
  );
}

export default EjHittad;