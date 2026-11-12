import "./Projekt.css";
import ProjektKort from "./ProjektKort";
import bild1 from "../assets/FloatingMonastery.jpg";
import bild2 from "../assets/DarkHedges.jpg";
import bild3 from "../assets/ForestOfPeaks.jpg";
import bild4 from "../assets/GlacierLake.jpg";
import { useState, useEffect } from "react";

const bilder = {
  "HomeImage.jpg": bild1,
  "FloatingMonastery.jpg": bild2,
  "DarkHedges.jpg": bild3,
  "ForestOfPeaks.jpg": bild4,
};

const SERVER_URL = "http://localhost:3001/projekt" 

function Projekt() {
  const [projektLista, setProjektLista] = useState([]);
  const [vald, setVald] = useState("Alla");
  const [sok, setSok] = useState("");
  const [sortering, setSortering] = useState("standard")
  const [error, setError] = useState("")
  
  useEffect(() => {
    async function hamtaProjekt() {
      const res = await fetch("http://localhost:3001/projekt");
      const data = await res.json();
      setProjektLista(data);
    }
    hamtaProjekt();
  }, []);

  async function deleteProjekt(id) {
    try {
      const response = await fetch(SERVER_URL + "/" + id, {method: "DELETE"});
      if (!response.ok) {
        throw new Error("Servern svarade med " + response.status);
      }
      setProjektLista((prev) => prev.filter((p) => p.id !== id));
    } catch {
      setError("Kunde inte ta bort projektet. Är servern igång?");
    }
  }

  const filterLista = ["Alla"];

  for (const projekt of projektLista) {              
    for (const teknik of projekt.teknik) {           
      if (!filterLista.includes(teknik)) {           
        filterLista.push(teknik);                    
      }                                              
    }                                                
  }            

  const synligaProjekt = projektLista.filter((p) => {
    const rattTeknik = vald === "Alla" || p.teknik.includes(vald);
    const rattSok = p.titel.toLowerCase().includes(sok.toLowerCase());
    return rattTeknik && rattSok;
  })

  const sorteradeProjekt = [...synligaProjekt];

  if (sortering === "titel") {
    sorteradeProjekt.sort((a, b) => a.titel.localeCompare(b.titel, "sv"));
  }

  if (sortering === "teknik") {
    sorteradeProjekt.sort((a, b) => b.teknik.length - a.teknik.length)
  }

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
        Sök projekt
        <input
          type="search"
          value={sok}
          onChange={(e) => setSok(e.target.value)}
          placeholder="t.ex. räknare"
        />
      </label>

      <select className="sortera-projekt" 
        value={sortering} 
        onChange={(e) => setSortering(e.target.value)}
      >
        <option value="standard">Standard</option>
        <option value="titel">Titel A-Ö</option>
        <option value="teknik">Tekniker</option>
      </select>


      <p className="projekt-antal">
        Visar {synligaProjekt.length} av {projektLista.length} projekt
      </p>

        {synligaProjekt.length === 0 ? (
          <p className="projekt-tom">Inga projekt matchar. Prova annat filter</p>
        ) : (
          <div className="projekt-lista">
            {sorteradeProjekt.map((p) => (
            <ProjektKort
              key={p.id}
              id={p.id}
              titel={p.titel}
              text={p.text}
              bild={bilder[p.bild]}
              lank={p.lank}
              teknik={p.teknik}
              tabort={deleteProjekt}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projekt;