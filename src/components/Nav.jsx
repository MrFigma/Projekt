import './Nav.css';
import './Knapp.css';
import heroBild from '../assets/hero2.png';
import { NavLink } from 'react-router-dom';
import Knapp from './Knapp';

function Navbar({mork, setMork}) {
  return (
    <nav className="navbar">
      <span className="logo">
        <img className="hero-emblem" 
          src={heroBild}
          alt="CarCharodons Emblem"
        />
      </span>

      <div className="lankar">
        <NavLink to="/">Hem</NavLink>
        <NavLink to="/om-mig">Om mig</NavLink>
        <NavLink to="/kontakt">Kontakt</NavLink>
      </div>
      
      <Knapp
        text={ <span style={{ color: mork ? "yellow" : "white" }}>
          ☾
        </span>}
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