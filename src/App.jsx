import "./App.css";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import OmMig from "./pages/OmMig";
import Kontakt from "./pages/Kontakt";
import ProjektSida from "./pages/ProjektSida";
import Hem from "./pages/Hem";
import ProjektDetalj from "./pages/ProjektDetalj";
import EjHittad from "./pages/EjHittad";
import MinServer from "./components/MinServer"
import Todo from "./components/Todo";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
const [mork, setMork] = useState(
  localStorage.getItem("morktLage") === "true"
);

  return (
  <div className={mork ? "app morkt" : "app"}>
    <Navbar mork={mork} setMork={setMork} />
    <Routes>
      <Route path="/" element={<Hem />} /> 
      <Route path="/om-mig" element={<OmMig />} />
      <Route path="/projekt" element={<ProjektSida />} />
      <Route path="/projekt/:id" element={<ProjektDetalj />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="/Todo" element={<Todo />} />
      <Route path="*" element={<EjHittad />} />
      <Route path="/server" element={<MinServer />} />
    </Routes>
    <Footer />
  </div>
  );
}

export default App;