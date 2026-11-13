import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProjektDetalj() {
  const { id } = useParams();
  const [projekt, setProjekt] = useState(null);
  const [fel, setFel] = useState(false);

  useEffect(() => {
    async function hamtaProjekt() {
      const res = await fetch(`http://localhost:3001/projekt/${id}`);

      if (!res.ok) {
        setFel(true);
        return;
      }

      const data = await res.json();
      setProjekt(data);
    }

    hamtaProjekt();
  }, [id]);

  if (fel) {
    return <p>Projektet finns inte. <Link to="/">Till Startsidan</Link></p>;
  }

  if (!projekt) {
    return <p>Laddar...</p>;
  }

  const { titel, text, teknik } = projekt;

  return (
    <section className="project-detail">
      <h2>{titel}</h2>
      <p>{text}</p>
      <ul>
        {teknik.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </section>
  );
}

export default ProjektDetalj;