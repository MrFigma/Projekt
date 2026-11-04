import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import GitHubRepon from "../components/GitHubRepon";
import Vader from "../components/Vader";
import Todo from "../components/Todo";

function Hem() {
  return (
    <>
      <Hero namn="Mr.Figma" />
      <Projekt />
      <Vader />
      <GitHubRepon />
      <Todo />
    </>
  );
}

export default Hem;