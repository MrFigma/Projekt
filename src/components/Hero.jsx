import './Hero.css';
import { NAME } from '../data/settings';
import heroBild from '../assets/HomeImage.jpg';
import Knapp from './Knapp';

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-innehall">
        <p className="hero-intro">Hej jag heter {NAME}!</p>
        <h2 id="hero-title">Jag lär mig att bygga för webben.</h2>
        <p className="hero-text">
          Välkommen till min portfolio. Här delar jag lär mig 
          med HTML, CSS och React.
        </p>
        <Knapp type="button" text="Projekt" lank="/projekt" />
      </div>
      <img className="hero-bild" 
        src={heroBild} 
        alt="Utsickt över fält och berg rakt ur Lord of the rings filmerna" 
      />
    </section>
  );
}

export default Hero;