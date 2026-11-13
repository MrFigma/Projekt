import { useState } from "react";
import Knapp from "../components/Button";
import "./Contact.css";
import "./ContactForm.css";

const MAX_TECKEN = 500;
const FORMSPREE_URL = "https://formspree.io/f/DITT_FORM_ID";

function KontaktFormular() {
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

    if (meddelande.trim() === "") {
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

    setSkickar(true);

    try {
      const svar = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: namn.trim(),
          email: email.trim(),
          message: meddelande.trim(),
        }),
      });

      const data = await svar.json();

      if (!svar.ok) {
        const formulärFel = data.errors
          ?.map((item) => item.message)
          .join(", ");

        setFel(formulärFel || "Formuläret kunde inte skickas.");
        return;
      }

      setSkickat(true);
      setEmail("");
      setMeddelande("");
    } catch {
      setFel("Kunde inte skicka meddelandet. Kontrollera din internetanslutning.");
    } finally {
      setSkickar(false);
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
        placeholder="Ditt namn"
        onChange={(e) => setNamn(e.target.value)}
      />

      <label htmlFor="email">E-post</label>
      <input
        id="email"
        type="email"
        required
        value={email}
        placeholder="namn@exempel.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="medd">Meddelande</label>
      <textarea
        id="medd"
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
  );
}

export default KontaktFormular;