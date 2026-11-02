import "./Projekt.css";
import ProjektKort from "./ProjektKort";
import projektLista from "../data/projekt.json"
import bild1 from "../assets/FloatingMonastery.jpg";
import bild2 from "../assets/DarkHedges.jpg";
import bild3 from "../assets/ForestOfPeaks.jpg";
import bild4 from "../assets/GlacierLake.jpg";
import { useState } from "react";

const bilder = {
  "HomeImage.jpg": bild1,
  "FloatingMonastery.jpg": bild2,
  "DarkHedges.jpg": bild3,
  "ForestOfPeaks.jpg": bild4,
};

const filterLista = ["Alla", "React", "CSS", "HTML", "useState", "Git"];

function Projekt() {

  const [vald, setVald] = useState("Alla");
  const [sok, setSok] = useState("");

  const synligaProjekt = projektLista.filter((p) => {
    const rattTeknik = vald === "Alla" || p.teknik.includes(vald);
    const rattSok = p.titel.toLowerCase().includes(sok.toLowerCase());
    return rattTeknik && rattSok;
  })

  return (
    <section className="projekt" id="projekt">
      <h2>Mina projekt</h2>
      
      <div className="projekt-filter">
        {filterLista.map((f) => (
            <button
            key={f}
            className={f === vald ? "filter-knapp aktiv" : "filter-knapp"}
            onClick={() => setVald(f)}
            aria-pressed={f === vald}
          >
            {f}
          </button>
        ))}
      </div>

      <label className="projekt-sok">
        Sok projekt
        <input
          type="search"
          value={sok}
          onChange={(e) => setSok(e.target.value)}
          placeholder="t.ex. räknare"
        />
      </label>

      <p className="projekt-antal">
        Visar {synligaProjekt.length} av {projektLista.length} projekt
      </p>

        {synligaProjekt.length === 0 ? (
          <p className="projekt-tom">Inga projekt matchar. Prova annat filter</p>
        ) : (
          <div className="projekt-lista">
            {synligaProjekt.map((p) => (
            <ProjektKort
              key={p.id}
              titel={p.titel}
              text={p.text}
              bild={bilder[p.bild]}
              lank={p.lank}
              teknik={p.teknik}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projekt;