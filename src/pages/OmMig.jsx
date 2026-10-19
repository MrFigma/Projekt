import "./OmMig.css"
import heroBild from "../assets/hero7.jpg"

function OmMig() {
  return (
    <section className="om-mig" id="om-mig">
      <img className="om-mig-bild" 
        src={heroBild} 
        alt="Space Marine Shark with BIG gun"
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