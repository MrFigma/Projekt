import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import "./Knapp.css";
import heroBild from "../assets/LogoEmblem.jpg";
import Knapp from "./Knapp";

function Navbar({ mork, setMork }) {
  const [oppen, setOppen] = useState(false);

  function stang() {
    setOppen(false);
  }

  return (
    <nav className="navbar">
      <span className="logo">
        <img
          className="hero-emblem"
          src={heroBild}
          alt="CarCharodons emblem"
        />
      </span>

      <button
        className="meny-knapp"
        type="button"
        onClick={() => setOppen(!oppen)}
        aria-expanded={oppen}
        aria-controls="huvudmeny"
        aria-label={oppen ? "Stäng meny" : "Öppna meny"}
      >
        {oppen ? "✕" : "☰"}
      </button>

      <div
        id="huvudmeny"
        className={oppen ? "lankar oppen" : "lankar"}
      >
        <NavLink to="/" end onClick={stang}>Hem</NavLink>
        <NavLink to="/om-mig" onClick={stang}>Om mig</NavLink>
        <NavLink to="/projekt" onClick={stang}>Projekt</NavLink>
        <NavLink to="/kontakt" onClick={stang}>Kontakt</NavLink>
      </div>

      <Knapp
        className="MorkKnapp"
        text={
          <span style={{ color: mork ? "yellow" : "white" }}>
            ☾
          </span>
        }
        type="button"
        onClick={() => {
          const nyttMorktLage = !mork;
          setMork(nyttMorktLage);
          localStorage.setItem("morktLage", nyttMorktLage);
        }}
      />
    </nav>
  );
}

export default Navbar;