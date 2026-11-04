import "./ProjektKort.css";
import "./Knapp.css";
import Knapp from "./Knapp";

function ProjektKort({ titel, text, bild, lank, teknik }) {
  return (
    <article className="projekt-kort">
      <img className="projekt-bild" src={bild} alt="" />
      <div className="projekt-info">
        <h3>{titel}</h3>
        <p>{text}</p>

        <ul className="projekt-taggar">
          {teknik.map ((t) =>(
            <li key={t}>{t}</li>
          ))}
        </ul>

        {lank && (
          <Knapp type="button" text="Se Projekt" lank={lank}/>
        )}
      </div>
    </article>
  );
}

export default ProjektKort;