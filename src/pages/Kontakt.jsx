import "./Kontakt.css";
import KontaktFormular from "./Kontaktform";

function Kontakt() {
  return (
    <section id="kontakt" className="kontakt">
      <div>
        <h2>Kontakta mig</h2>
        <p className="kontakt-text">Har du en fråga? skriv ett meddelande! </p>
      </div>
      
        <KontaktFormular />
    </section>
  );
}

export default Kontakt;