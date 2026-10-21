import "./Kontakt.css";

import Knapp from "../components/Knapp";


function Kontakt() {
  return (
    <section id="kontakt" className="kontakt">
      <div>
        <h2>Kontakta mig</h2>
        <p className="kontakt-text">Har du en fråga? skriv ett meddelande! </p>
      </div>

      <form className="kontakt-form">
        <label htmlFor="namn">Namn</label>
        <input type="text" id="namn" name="name" placeholder="Ditt namn" />
      
        <label htmlFor="epost">E-post</label>
        <input type="email" id="epost" name="epost" placeholder="name@exempel.se"/>

        <label htmlFor="meddelande">Meddelande</label>
        <textarea id="meddelande" name="meddelande" rows="5" placeholder="Skriv här"/>
        
        <Knapp type="submit" text="Skicka"/>
      </form>
    </section>
  );
}

export default Kontakt;