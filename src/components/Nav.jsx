import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import "./Button.css";
import heroBild from "../assets/LogoImage.jpg";
import Knapp from "./Button";

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
        className="menu-button"
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
        className={oppen ? "links open" : "links"}>

        <NavLink to="/" end onClick={stang}>Hem</NavLink>
        <NavLink to="/om-mig" onClick={stang}>Om mig</NavLink>
        <NavLink to="/projekt" onClick={stang}>Projekt</NavLink>
        <NavLink to="/kontakt" onClick={stang}>Kontakt</NavLink>
        
      </div>

      <Knapp
        className="dark-mode-button"
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