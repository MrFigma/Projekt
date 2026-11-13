import "./Weather.css";
import { useState, useEffect } from "react";
import stader from "../data/cities.json";

const BAS_URL = "https://api.open-meteo.com/v1/forecast";

function Vader() {
  const [valdStad, setValdStad] = useState(stader[0].namn);
  const [vader, setVader] = useState(null);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  useEffect(() => {
    async function hamta() {
      try {
        setLaddar(true);
        setFel("");
        const stad = stader.find((s) => s.namn === valdStad);
        const url = BAS_URL + "?latitude=" + stad.lat + "&longitude=" + stad.lon
          + "&current=temperature_2m,wind_speed_10m";

        const svar = await fetch(url);
        if (!svar.ok) {
          throw new Error("Fel " + svar.status);
        }
        const data = await svar.json();
        setVader({
          temp: data.current.temperature_2m,
          vind: data.current.wind_speed_10m,
        });
      } catch {
        setFel("Kunde inte hämta vädret just nu.");
      } finally {
        setLaddar(false);
      }
    }
    hamta();
  }, [valdStad]);

  return (
    <section className="weather">
      <h2>Vädret just nu</h2>

      <select className="city-select" value={valdStad} onChange={(e) => setValdStad(e.target.value)}>
        {stader.map((stad) => (
          <option key={stad.namn} value={stad.namn}>{stad.namn}</option>
        ))}
      </select>

      {laddar && <p>Laddar vädret...</p>}
      {fel && <p role="alert">{fel}</p>}
      {vader && !laddar && (
        <p className="weather-card">
          {valdStad}: {vader.temp} °C, {vader.vind} km/h
        </p>
      )}
    </section>
  );
}

export default Vader;