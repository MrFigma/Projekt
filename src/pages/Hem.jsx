import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import GitHubRepon from "../GitHubRepon";

function Hem() {
  return (
    <>
      <Hero namn="Mr.Figma" />
      <Projekt />
      <GitHubRepon />
    </>
  );
}

export default Hem;