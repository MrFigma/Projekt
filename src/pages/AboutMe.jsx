import "./AboutMe.css";
import { Visa } from "../components/Counter"
import Statistik from "../components/Statistics";
import heroBild from "../assets/GhibliInspiredImage.jpg";

function OmMig() {
  return (
    <section className="about-me" id="om-mig">
      <img className="about-me-image" 
        src={heroBild} 
        alt="Tåg bro över sjö i Japan ser ut som den kommer ur en Studio Ghibli film."
      />
      
      <div className="about-me-content">
        <h2>Om Mig</h2>

        <Statistik />

        <p className="about-me-text">
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
        <ul className="about-me-list">
          <li>React</li>
          <li>Javascript</li>
          <li>REST API</li>
        </ul>
      </div>
    </section>
  );
}

export default OmMig;