import './Footer.css';
import { EMAIL, NAME } from '../data/settings';
import { Link } from 'react-router-dom';

function Footer() {
  const år = new Date().getFullYear();
  
  return (
    <footer className="footer">
        <p>© {år} {NAME}</p>
      <div className="footer-links">
        <Link to="/">Hem</Link>
        <a href="https://www.linkedin.com/in/markus-andersson-863908313/">LinkedIn</a>
        <a href="https://github.com/MrFigma">Github</a>
      </div>
      <a className="footer-email" href="mailto:din@email.se">{EMAIL}</a>
    </footer>
  );
}

export default Footer;