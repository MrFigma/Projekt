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
          text="Flytade kloster i Meteora Grekland."
          bild={bild1}
          lank="https://en.wikipedia.org/wiki/Monastery_of_the_Holy_Trinity,_Meteora"
        />
          <ProjektKort titel="Projekt 2" 
          text="Dark Hedges i Irland." 
          bild={bild2} 
          lank="https://en.wikipedia.org/wiki/Dark_Hedges"
        />
        <ProjektKort titel="Projekt 3"
          text="Skogen av bergs toppar i Kina."
          bild={bild3}
          lank="https://en.wikipedia.org/wiki/Wulingyuan"
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