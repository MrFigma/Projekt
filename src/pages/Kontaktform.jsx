import {useState} from 'react';
import Knapp from '../components/Knapp';
import './Kontakt.css'

function KontaktFormular() {
  const [namn, setNamn] = useState("");
  const [email, setEmail] =useState("");
  const [meddelande, setMeddelande] = useState("");
  const [skickat, setSkickat] = useState(false);
  const [fel, setFel] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes("@")) {
      setFel("E-postadressen måste innehålla @.");
      return;
    }
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
      <Knapp type="submit" text="Skicka"/>
    </form>
  );
}

export default KontaktFormular