import './Knapp.css';


function Knapp({ text, lank, type}) {
  if (type === "submit") {
    return <button className="knapp" type="submit">Skicka</button>
  }
  return <a className="knapp" href={lank}>{text}</a>
}

export default Knapp;