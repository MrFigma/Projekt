import { useState, useEffect } from "react";


const SERVER_URL = "http://localhost:3001/projekt";


function ProjektFranApi() {

  useEffect(() => {
    async function hamtaProjekt() {
      const [projekt, setProjekt] = useState([]);
      const [laddar, setLaddar] = useState(true);
      const [fel, setFel] = useState("")
      
      try {
        const response = await fetch(SERVER_URL);
        if (!response.ok) {
          throw new Error("Servern svarade med " + response.status);
        }
        const data = await response.json();
        setProjekt(data);
      } catch {
        setFel("Får inget svar från servern. Är den igång?");
      } finally {
        setLaddar(false);
      }
    }
    hamtaProjekt();
  }, []);

 return (
    <section>
     <h2>Projekt från servern</h2>

     {laddar && <p>Hämtar projekt...</p>}
     {fel && <p role="alert">{fel}</p>}

      {projekt.map((p) => (
       <div key={p.id}>
         <h3>{p.titel}</h3>
         <p>{p.text}</p>
       </div>
     ))}
    </section>
  );
}

export default ProjektFranApi;
