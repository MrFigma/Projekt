import { useState } from "react";
import Knapp from "../components/Button";
import "./Contact.css";
import "./ContactForm.css";

const MAX_TECKEN = 500;
const SERVER_URL = "http://localhost:3001/kontakt";

function KontaktFormular() {
  const [namn, setNamn] = useState("");
  const [email, setEmail] = useState("");
  const [meddelande, setMeddelande] = useState("");
  const [skickat, setSkickat] = useState(false);
  const [fel, setFel] = useState("");

  const kvar = MAX_TECKEN - meddelande.length;
  const fardigt = meddelande.trim() !== "" && kvar >= 0;

  async function handleSubmit(e) {
    e.preventDefault();
    setFel("");

    const renText = meddelande.trim();

    if (renText === "") {
      setFel("Meddelandet får inte vara tomt.");
      return;
    }

    if (meddelande.length > MAX_TECKEN) {
      setFel(`Meddelandet får högst vara ${MAX_TECKEN} tecken.`);
      return;
    }

    if (!email.trim().includes("@")) {
      setFel("E-postadressen måste innehålla @.");
      return;
    }

    try {
      const answer = await fetch(SERVER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          namn: namn.trim(),
          email: email.trim(),
          text: renText,
        }),
      });

      const data = await answer.json();

      if (!answer.ok) {
        setFel(data.fel || "Servern kunde inte ta emot meddelandet.");
        return;
      }

      setSkickat(true);
      setEmail("");
      setMeddelande("");
    } catch {
      setFel("Kunde inte skicka meddelandet. Kontrollera att servern körs.");
    }
  }

  if (skickat) {
    return <p>Tack för ditt meddelande, {namn}!</p>;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {fel && <p role="alert">{fel}</p>}

      <label htmlFor="namn">Namn</label>
      <input
        id="namn"
        required
        value={namn}
        onChange={(e) => setNamn(e.target.value)}
      />

      <label htmlFor="email">E-post</label>
      <input
        id="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="medd">Meddelande</label>
      <textarea
        id="medd"
        required
        value={meddelande}
        onChange={(e) => setMeddelande(e.target.value)}
      />

      <p className={kvar < 50 ? "characters-left warning" : "characters-left"}>
        {kvar} tecken kvar!
      </p>

      <Knapp type="submit" text="Skicka" disabled={!fardigt} />
    </form>
  );
}

export default KontaktFormular;