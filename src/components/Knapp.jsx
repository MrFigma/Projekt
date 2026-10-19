import './Knapp.css';


function Knapp({ text, lank, type}) {
  return type === "submit"
    ?  <button className="knapp" type="submit">Skicka</button>
    :  <a className="knapp" href={lank}>{text}</a>;
}

export default Knapp;