import "./Projekt.css";
import ProjektKort from "./ProjektKort";
import projektLista from "../data/projekt.json"
import bild1 from "../assets/FloatingMonastery.jpg";
import bild2 from "../assets/DarkHedges.jpg";
import bild3 from "../assets/ForestOfPeaks.jpg";
import bild4 from "../assets/GlacierLake.jpg";

const bilder = {
  "FloatingMonastery": bild1,
  "DarkHedges": bild2,
  "ForestOfPeaks": bild3,
  "GlacierLake": bild4,
};

const [vald, setVald] = useState("Alla");
const [sok, setSok] = useState("");

function Projekt() {
  return (
    <section className="projekt" id="projekt">
      <h2>Mina projekt</h2>

      <div className="projekt-lista">
        {projektLista.map((p) => (
          <projektLista 
            key={p.id}
            titel={p.titel}
            text={p.text}
            bild={p.bild}
            lank={p.lank}
          />
        ))}
      </div>
    </section>
  );
}

export default Projekt;