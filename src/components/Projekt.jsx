import "./Projekt.css";
import ProjektKort from "./ProjektKort";
import bild1 from "../assets/hero3.jpg";
import bild2 from "../assets/hero4.jpg";
import bild3 from "../assets/hero5.jpg";
import bild4 from "../assets/hero6.jpg";

function Projekt() {
  return (
    <section className="projekt" id="projekt">
      <h2>Mina projekt</h2>

      <div className="projekt-lista">
        <ProjektKort
          titel="Min portfoliosida"
          text="Sidan du tittar på nu. Byggd med React och CSS."
          bild={bild1}
          lank="https://www.google.se"
        />
          <ProjektKort titel="Projekt 2" 
          text="Carcharodons wants YOU" 
          bild={bild2} 
          lank="https://wh40k.lexicanum.com/wiki/Carcharodons"
        />
        <ProjektKort titel="Projekt 3"
          text="Gå med i den dyraste plasten i världen."
          bild={bild3}
          lank="https://www.warhammer.com/en-WW/home"
       />
        <ProjektKort 
          text="Kommer snart."
          bild={bild4}

        />
      </div>
    </section>
  );
}

export default Projekt;