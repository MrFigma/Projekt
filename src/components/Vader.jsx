import "./Vader.css"
import { useState, useEffect } from "react";

const stader = [
  { namn: "Helsingborg", lat: 56.05, lon: 12.69 },
  { namn: "Stockholm", lat: 59.33, lon: 18.07 },
  { namn: "Kiruna", lat: 67.86, lon: 20.23 },
];

const BAS_URL = "https://api.open-meteo.com/v1/forecast";

async function hamtaStad(stad) {
  const url = BAS_URL + "?latitude=" + stad.lat + "&longitude=" + stad.lon
    + "&current=temperature_2m,wind_speed_10m";
  const svar = await fetch(url);

  if (!svar.ok) {
    throw new Error("Kunde inte hämta " + stad.namn);
  }

  const data = await svar.json();
  return {
    namn: stad.namn,
    temp: data.current.temperature_2m,
    vind: data.current.wind_speed_10m,
  };
}

function Vader() {
  const [vader, setVader] = useState(null);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  useEffect(() => {
    async function hamta() {
      try {
        const svar = await Promise.all(stader.map(hamtaStad));
        setVader(svar);
      } catch {
        setFel("Kunde inte hämta vädret just nu.")
      } finally {
        setLaddar(false)
      }
    }
    hamta()
  }, [])

  return (
    <section className="vader">
      <h2>Vädret just nu</h2>
      {laddar && <p>Laddar vädret...</p>}
      {fel && <p role="alert">{fel}</p>}
    {vader && (
      <div className="vader-lista">
        {vader.map((stad) => (
          <p key={stad.namn} className="vader-kort">{stad.namn}: {stad.temp} °C, {stad.vind} km/h</p>
        ))}
      </div>
    )}
    </section>
  );
}

export default Vader;