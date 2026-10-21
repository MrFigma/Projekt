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
      <button onClick={min}>Minska</button>
      <span>{antal}</span>
      <button onClick={oka}>Plusa</button>
      <button onClick={() => 
        setAntal(0)}>Nollställ</button>
    </div>
  );
}

function Visa({ children }) {
  const [visas, setVisas] = useState(false);

  return (
    <div>
      <button onClick={() => setVisas(!visas)}>
        {visas ? "Visa Mindre" : "Visa Mer"}
      </button>

      {visas && children}
    </div>
  );
}


export {Visa, Raknare}