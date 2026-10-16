import "./ProjektKort.css";
import "./Knapp.css";
import Knapp from "./Knapp";

function ProjektKort({ titel, text, bild, lank }) {
  return (
    <article className="projekt-kort">
      <img className="projekt-bild" src={bild} alt="" />
      <div className="projekt-info">
        <h3>{titel}</h3>
        <p>{text}</p>

        {lank && (
          <Knapp text="Se Projekt" lank={lank}/>
        )}
      </div>
    </article>
  );
}

export default ProjektKort;