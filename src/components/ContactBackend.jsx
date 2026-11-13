import { useState } from "react";
import Knapp from "./Button";
import "../pages/Contact.css";
import "../pages/ContactForm.css";

const MAX_TECKEN = 500;
const SERVER_URL = "http://localhost:3001/kontakt";

function ContactBackend() {
  const [namn, setNamn] = useState("");
  const [email, setEmail] = useState("");
  const [meddelande, setMeddelande] = useState("");
  const [skickat, setSkickat] = useState(false);
  const [skickar, setSkickar] = useState(false);
  const [fel, setFel] = useState("");

  const kvar = MAX_TECKEN - meddelande.length;
  const fardigt =
    namn.trim() !== "" &&
    email.trim().includes("@") &&
    meddelande.trim() !== "" &&
    kvar >= 0;

  async function handleSubmit(e) {
    e.preventDefault();
    setFel("");

    if (!namn.trim()) {
      setFel("Fyll i ditt namn.");
      return;
    }

    if (!email.trim().includes("@")) {
      setFel("E-postadressen måste innehålla @.");
      return;
    }

    if (!meddelande.trim()) {
      setFel("Meddelandet får inte vara tomt.");
      return;
    }

    if (meddelande.length > MAX_TECKEN) {
      setFel(`Meddelandet får högst vara ${MAX_TECKEN} tecken.`);
      return;
    }

    setSkickar(true);

    try {
      const svar = await fetch(SERVER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          namn: namn.trim(),
          email: email.trim(),
          text: meddelande.trim(),
        }),
      });

      const data = await svar.json();

      if (!svar.ok) {
        setFel(data.fel || "Något gick fel när meddelandet skulle skickas.");
        return;
      }

      setSkickat(true);
      setEmail("");
      setMeddelande("");
    } catch {
      setFel("Får inget svar från servern. Är den igång?");
    } finally {
      setSkickar(false);
    }
  }

  if (skickat) {
    return <p>Tack för ditt meddelande, {namn}!</p>;
  }

  return (
    <section className="contact">
      <div>
        <h2>Kontakta min server</h2>
        <p className="contact-text">Det här formuläret skickar till Express.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        {fel && <p role="alert">{fel}</p>}

        <label htmlFor="backend-namn">Namn</label>
        <input
          id="backend-namn"
          required
          value={namn}
          placeholder="Ditt namn"
          onChange={(e) => setNamn(e.target.value)}
        />

        <label htmlFor="backend-email">E-post</label>
        <input
          id="backend-email"
          type="email"
          required
          value={email}
          placeholder="namn@exempel.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="backend-medd">Meddelande</label>
        <textarea
          id="backend-medd"
          required
          value={meddelande}
          placeholder="Ditt meddelande"
          onChange={(e) => setMeddelande(e.target.value)}
        />

        <p className={kvar < 50 ? "characters-left warning" : "characters-left"}>
          {kvar} tecken kvar!
        </p>

        <Knapp
          type="submit"
          text={skickar ? "Skickar..." : "Skicka"}
          disabled={!fardigt || skickar}
        />
      </form>
    </section>
  );
}

export default ContactBackend;