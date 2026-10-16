import './Nav.css';
import heroBild from '../assets/hero2.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">
        <img className="hero-emblem" 
          src={heroBild}
          alt="CarCharodons Emblem"
        />
      </span>
      <div className="lankar">
        <Link to="/">Hem</Link>
        <Link to="/om-mig">Om mig</Link>
        <Link to="/kontakt">Kontakt</Link>
      </div>
    </nav>
  );
}

export default Navbar;