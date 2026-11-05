import projektLista from "../data/projekt.json"
import "./Statistik.css"


function Statistik() {
  const antal = projektLista.reduce((summa, projekt) => {
    for (const teknik of projekt.teknik) {
      summa[teknik] = (summa[teknik] || 0) + 1;
    }
    return summa;
  }, {});

  const lista = Object.entries(antal).sort((a,b) => b[1] - a[1]);

  const totalt = projektLista.length;

  return (
    <section className="statistik">
      <h3>Detta har jag använt mest</h3>

      <ul className="statistik.lista">
        {lista.map(([namn, antalet]) => {
          const procent = Math.round((antalet / totalt) * 100);

          return (
            <li key={namn} className="statistik-rad">
              <span className="statistik-namn">{namn}</span>
              <div className="statistik-backgrund">
                <div className="statistik-stapel"
                  style={{ width: procent + "%" }}
                ></div>
              </div>
              <span className="statistik-procent"> {procent} %</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Statistik