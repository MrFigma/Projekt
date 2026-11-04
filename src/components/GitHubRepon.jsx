import "./GitHubRepon.css";
import { GITHUB_USER } from "../data/settings";
import { snyggtDatum, kortText } from "../utils/text";
import { useState, useEffect } from "react";

const API_URL =
  "https://api.github.com/users/" + GITHUB_USER + "/repos?sort=updated&per_page=6";

function GitHubRepon() {
  const [repon, setRepon] = useState([]);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  useEffect(() => {
    async function hamta() {
      try {
        const svar = await fetch(API_URL);
        if (!svar.ok) {
          throw new Error("Svar: " + svar.status);
        }
        const data = await svar.json();
        console.log("Repon från Github", data);
        setRepon(data);
      } catch {
        setFel("Kunde inte hämta repon från GitHub just nu. Försök igen om en stund.");
      } finally {
        setLaddar(false);
      }
    }
    hamta();
  }, []);

  return (
    <section className="github">
      <h2>Senast på GitHub</h2>

      {laddar && <p>Laddar repon...</p>}
      {fel && <p className="github-fel" role="alert">{fel}</p>}

      <ul className="github-lista">
        {repon.map((r) => (
          <li key={r.id} className="github-kort">
            <h3>
              <a href={r.html_url}>{r.name}</a>
            </h3>
            <p>{r.description || "Ingen beskrivning än."}</p>
            {r.language && <span className="github-sprak">{r.language}</span>}
            <p>Uppdaterad {snyggtDatum(r.updated_at)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GitHubRepon;