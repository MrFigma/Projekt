import {useState} from 'react';
import Knapp from '../components/Knapp';
import './Kontakt.css'

function KontaktFormular() {
  const [namn, setNamn] = useState("");
  const [meddelande, setMeddelande] = useState("");
  const [skickat, setSkickat] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(namn, meddelande);
    setSkickat(true);
  }

  if (skickat) return <p>Tack för ditt meddelande, {namn}!</p>;

  return (
    <form className="kontakt-form" onSubmit={handleSubmit}>
      <label htmlFor="namn">Namn</label>
      <input id="namn" value={namn} onChange={e => setNamn(e.target.value)} />
      <label htmlFor="medd">Meddelande</label>
      <textarea id="medd" value={meddelande} onChange={e => setMeddelande(e.target.value)} />
      <Knapp type="submit" text="Skicka"/>
    </form>
  );
}

export default KontaktFormular