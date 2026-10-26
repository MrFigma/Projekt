import './Knapp.css';


function Knapp({ text, lank, type, onClick, className = "" }) {
  const knappClassName = `knapp ${className}`.trim();

  if (type === "submit" || type === "button") {
    return (
      <button className={knappClassName} type={type} onClick={onClick}>
        {text}
      </button>
    );
  }
  
  return <a className="knapp" href={lank}>{text}</a>
}

export default Knapp;