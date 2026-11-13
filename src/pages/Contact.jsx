import "./Contact.css";
import KontaktFormular from "./ContactForm";

function Kontakt() {
  return (
    <section id="kontakt" className="contact">
      <div>
        <h2>Kontakta mig</h2>
        <p className="contact-text">Har du en fråga? skriv ett meddelande! </p>
      </div>
      
        <KontaktFormular />
    </section>
  );
}

export default Kontakt;