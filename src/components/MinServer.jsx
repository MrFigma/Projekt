import { useState, useEffect} from "react";

function MinServer() {
  const [data, setData] = useState(null);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  useEffect(() => {
    async function hamta(){
      try {
        setLaddar(true);
        setFel("");
        
        const svar = await fetch("http://localhost:3001/hej");
        if (!svar.ok) {
          throw new Error("Fel" + svar.status);
        }
        const json = await svar.json();
        setData(json);
      } catch {
        setFel("Kunde inte nå serrvern")
      } finally {
        setLaddar(false);
      }
    }
    hamta();
  }, []);
  return (
    <section>
      <h2>Svar från servern</h2>

      {laddar && <p>Laddar...</p>}
      {fel && <p role="alert">{fel}</p>}
      {data && !laddar && (
        <div>
          <p>{data.meddelande}</p>
          <p>Namn: {data.namn}</p>
          <p>Roll:: {data.roll}</p>
          <h3>intressen</h3>
          <ul>
            {data.intressen.map((intresse) => (
              <li key={intresse}>{intresse}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default MinServer;