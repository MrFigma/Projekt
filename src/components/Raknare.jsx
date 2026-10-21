import Knapp from './Knapp';
import { useState } from 'react';

function Raknare() {
  const [antal, setAntal] = useState(0);

  function oka() {
    setAntal(antal + 1);
  }

  function min() {
    if (antal > 0) {
      setAntal(antal - 1);
    }
  }
  return (
    <div>
      <Knapp type="button" 
        onClick={min} 
        text="Minska"
      />
      <span>{antal}</span>
       <Knapp type="button" 
        onClick={oka} 
        text="Öka"
      />

      <div>
        <Knapp 
          onClick={() => 
          setAntal(0)} 
          text="Nollställ"
        />
      </div>
    </div>
  );
}

function Visa({ children }) {
  const [visas, setVisas] = useState(false);

  return (
    <div>
      <Knapp
        type="button"
        text={visas ? "Visa Mindre" : "Visa Mer"}
        onClick={() => setVisas(!visas)}
      />

      {visas && children}
    </div>
  );
}


export {Visa, Raknare}