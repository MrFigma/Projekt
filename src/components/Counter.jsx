import Knapp from './Button';
import './Counter.css'
import { useState } from 'react';

function Visa({ children }) {
  const [visas, setVisas] = useState(false);

  return (
    <div className="show-more">
      <Knapp 
        className="show-button"
        type="button"
        text={visas ? "Visa Mindre" : "Visa Mer"}
        onClick={() => setVisas(!visas)}
      />

      {visas && children}
    </div>
  );
}


export {Visa}