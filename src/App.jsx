import "./App.css";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import OmMig from "./pages/OmMig";
import Kontakt from "./pages/Kontakt";
import Hem from "./pages/Hem";
import { Raknare } from "./components/Raknare"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/om-mig" element={<OmMig />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
      <Raknare />
      <Footer />
    </>
  );
}

export default App;