import "./OmMig.css";
import { Visa } from "../components/Raknare"
import heroBild from "../assets/RaktUrGhibli.jpg";

function OmMig() {
  return (
    <section className="om-mig" id="om-mig">
      <img className="om-mig-bild" 
        src={heroBild} 
        alt="Tåg bro över sjö i Japan ser ut som den kommer ur en Studio Ghibli film."
      />
      
      <div className="om-mig-innehall">
        <h2>Om Mig</h2>
        <p className="om-mig-text">
          Rappar kalja, delux version mini haj med minigun
        </p>
        <p>
          Här lär jag min att bygga sidor i React med komponenter och
          spara min kod i Github.
        </p>

        <Visa>
          <p>Här är mer text om mig.</p>
        </Visa>

        <h3>Det här lär jag mig i kursen</h3>
        <ul className="om-mig-lista">
          <li>React</li>
          <li>Javascript</li>
          <li>REST API</li>
        </ul>
      </div>
    </section>
  );
}

export default OmMig;