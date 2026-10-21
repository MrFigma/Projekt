import './Knapp.css';


function Knapp({ text, lank, type, onClick}) {
  if (type === "submit" || type === "button") {
    return <button className="knapp" type={type} onClick={onClick}>
      {text}
    </button>
  }
  return <a className="knapp" href={lank}>{text}</a>
}

export default Knapp;