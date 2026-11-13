import "./ProjectCard.css";
import "./Button.css";
import Knapp from "./Button";
import { Link } from "react-router-dom";

function ProjektKort({ titel, text, bild, id, teknik, lank, tabort }) {

  const anvanderReact = teknik.some((t) => t === "React");

  return (
    <article className="project-card">
      <img className="project-image" src={bild} alt="" />
      <div className="project-info">
        <h3>{titel}</h3>

        {anvanderReact && <span className="react-label">Använder React</span>}

        <p>{text}</p>

        <ul className="project-tags">
          {teknik.map ((t) =>(
            <li key={t}>{t}</li>
          ))}
        </ul>

        <Link to={`/projekt/${id}`}>
          <Knapp type="button" text="Läs mer" />
        </Link>

        <Knapp text="projekt" lank={lank} />
       </div>
          <Knapp type="button" text="Ta bort" onClick={() => tabort(id)} />

    </article>
  );
}

export default ProjektKort;