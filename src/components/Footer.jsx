import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  const år = new Date().getFullYear();
  
  return (
    <footer className="footer">
        <p>© {år} Mr.Figma</p>
      <div className="footer-lankar">
        <Link to="/">Hem</Link>
        <Link to="/om-mig">Om mig</Link>
        <a href="#Github">Github</a>
      </div>
    </footer>
  );
}

export default Footer;