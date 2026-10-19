import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  const år = new Date().getFullYear();
  
  return (
    <footer className="footer">
        <p>© {år} Mr.Figma</p>
      <div className="footer-lankar">
        <Link to="/">Hem</Link>
        <a href="https://www.linkedin.com/in/markus-andersson-863908313/">LinkedIn</a>
        <a href="https://github.com/MrFigma">Github</a>
      </div>
    </footer>
  );
}

export default Footer;