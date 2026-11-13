import Hero from "../components/Hero";
import Projekt from "../components/Projects";
import GitHubRepon from "../components/GitHubRepositories";
import Vader from "../components/Weather";
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