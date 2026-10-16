import Header from "../components/Header";
import Hero from "../components/Hero";
import Projekt from "../components/Projekt";

function Hem() {
  return (
    <>
      <Header namn="Mr.Figma" titel="Frontend-utvecklare" />
      <Hero namn="Mr.Figma" />
      <Projekt />
    </>
  );
}

export default Hem;