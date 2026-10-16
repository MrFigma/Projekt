import './Hero.css';
import heroBild from '../assets/hero1.jpg';
import Knapp from './Knapp';


function Hero({ namn }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-innehall">
        <p className="hero-intro">Hej jag heter {namn}!</p>
        <h2 id="hero-title">Jag lär mig att bygga för webben.</h2>
        <p className="hero-text">
          Välkommen till min portfolio. Här delar jag lär mig 
          med HTML, CSS och React.
        </p>
        <Knapp text="Läs vidare" lank="#valkommen" />
      </div>
      <img className="hero-bild" 
        src={heroBild} 
        alt="Carcharodon Space Marine Fighting Tyranids" 
      />
    </section>
  );
}

export default Hero;