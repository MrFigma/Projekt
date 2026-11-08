import {useState} from 'react';
import Knapp from '../components/Knapp';
import './Kontakt.css';
import './Kontaktform.css';

const MAX_TECKEN = 500;

function KontaktFormular() {
  const [namn, setNamn] = useState("");
  const [email, setEmail] =useState("");
  const [meddelande, setMeddelande] = useState("");
  const [skickat, setSkickat] = useState(false);
  const [fel, setFel] = useState("");
  const kvar = MAX_TECKEN - meddelande.length;
  const fardigt = meddelande.trim() !== "" && kvar > 0;

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes("@")) {
      setFel("E-postadressen måste innehålla @.");
      return;
    }
    setFel("");
    console.log(namn, email, meddelande);
    setSkickat(true);
    setEmail("");
    setMeddelande("");
  }

  if (skickat) return <p>Tack för ditt meddelande, {namn}!</p>;

  return (
    <form className="kontakt-form" onSubmit={handleSubmit}>
      <label htmlFor="namn">Namn</label>
      <input id="namn" required value={namn} onChange={e => setNamn(e.target.value)} />
      <label htmlFor="email">E-Mail</label>
      {fel && <p role="alert">{fel}</p>}
      <input id="email" required value={email} onChange={e => setEmail(e.target.value)} />
      <label htmlFor="medd">Meddelande</label>
      <textarea id="medd" required value={meddelande} onChange={e => setMeddelande(e.target.value)} />
      <p className={kvar < 50 ? "tecken-kvar Varning" : "tecken-kvar"}>{kvar} tecken kvar!</p>
      <Knapp type="submit" text="Skicka" disabled={!fardigt}/>
    </form>
  );
}

export default KontaktFormular