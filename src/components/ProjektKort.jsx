import "./ProjektKort.css";
import "./Knapp.css";
import Knapp from "./Knapp";
import { Link } from "react-router-dom";

function ProjektKort({ titel, text, bild, id, teknik, lank }) {

  const anvanderReact = teknik.some((t) => t === "React");

  return (
    <article className="projekt-kort">
      <img className="projekt-bild" src={bild} alt="" />
      <div className="projekt-info">
        <h3>{titel}</h3>

        {anvanderReact && <span className="react-etikett">Använder React</span>}

        <p>{text}</p>

        <ul className="projekt-taggar">
          {teknik.map ((t) =>(
            <li key={t}>{t}</li>
          ))}
        </ul>

        <Link to={`/projekt/${id}`}>
          <Knapp type="button" text="Läs mer" />
        </Link>

        <Knapp text="projekt" lank={lank} />
        
      </div>
    </article>
  );
}

export default ProjektKort;