import Knapp from './Knapp';
import { useState } from 'react';

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


export {Visa}