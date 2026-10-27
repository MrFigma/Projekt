import "./App.css";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import OmMig from "./pages/OmMig";
import Kontakt from "./pages/Kontakt";
import ProjektSida from "./pages/ProjektSida";
import Hem from "./pages/Hem";
import EjHittad from "./pages/EjHittad";
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
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="*" element={<EjHittad />} />
    </Routes>
    <Footer />
  </div>
  );
}

export default App;