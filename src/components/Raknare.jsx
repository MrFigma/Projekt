import Knapp from './Knapp';
import './Raknare.css'
import { useState } from 'react';

function Visa({ children }) {
  const [visas, setVisas] = useState(false);

  return (
    <div className="VisaMer">
      <Knapp 
        className="VisaKnapp"
        type="button"
        text={visas ? "Visa Mindre" : "Visa Mer"}
        onClick={() => setVisas(!visas)}
      />

      {visas && children}
    </div>
  );
}


export {Visa}