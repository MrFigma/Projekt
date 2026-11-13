import './Button.css';


function Knapp({ text, lank, type, onClick, className = "", disabled }) {
  const knappClassName = `button ${className}`.trim();

  if (type === "submit" || type === "button") {
    return (
      <button className={knappClassName} type={type} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    );
  }
  
  return <a className="button" href={lank}>{text}</a>
}

export default Knapp;