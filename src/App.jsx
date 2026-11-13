import "./App.css";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import OmMig from "./pages/AboutMe";
import Kontakt from "./pages/Contact";
import ProjektSida from "./pages/ProjectsPage";
import Hem from "./pages/Home";
import ProjektDetalj from "./pages/ProjectDetails";
import MinServer from "./components/MyServer";
import ContactBackend from "./components/ContactBackend";
import ProjektFranApi from "./components/ProjectsFromApi";
import Todo from "./components/Todo";
import EjHittad from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [mork, setMork] = useState(
    localStorage.getItem("morktLage") === "true"
  );

  return (
    <div className={mork ? "app dark" : "app"}>
      <Navbar mork={mork} setMork={setMork} />

      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/om-mig" element={<OmMig />} />
        <Route path="/projekt" element={<ProjektSida />} />
        <Route path="/projekt/:id" element={<ProjektDetalj />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/kontakt-server" element={<ContactBackend />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/projekt-api" element={<ProjektFranApi />} />
        <Route path="/server" element={<MinServer />} />
        <Route path="*" element={<EjHittad />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;