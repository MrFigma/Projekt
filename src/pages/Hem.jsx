import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import GitHubRepon from "../components/GitHubRepon";
import Vader from "../components/Vader";

function Hem() {
  return (
    <>
      <Hero namn="Mr.Figma" />
      <Projekt />
      <Vader />
      <GitHubRepon />
    </>
  );
}

export default Hem;