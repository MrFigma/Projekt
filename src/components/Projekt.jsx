import "./Projekt.css";
import ProjektKort from "./ProjektKort";
import bild1 from "../assets/FloatingMonastery.jpg";
import bild2 from "../assets/DarkHedges.jpg";
import bild3 from "../assets/ForestOfPeaks.jpg";
import bild4 from "../assets/GlacierLake.jpg";

function Projekt() {
  return (
    <section className="projekt" id="projekt">
      <h2>Mina projekt</h2>

      <div className="projekt-lista">
        <ProjektKort
          titel="Min portfoliosida"
          text="Sidan du tittar på nu. Byggd med React och CSS."
          bild={bild1}
          lank="https://www.google.com/search?sxsrf=APpeQnsA9F4OhXMa2DiK2BwAW_srYi_7gA:1793179908811&udm=2&q=Floating+monastery+meteora"
        />
          <ProjektKort titel="Projekt 2" 
          text="Dark Hedges i Irland." 
          bild={bild2} 
          lank="https://wh40k.lexicanum.com/wiki/Carcharodons"
        />
        <ProjektKort titel="Projekt 3"
          text="Skogen av bergs toppar i Kina."
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