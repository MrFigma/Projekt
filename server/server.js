import express from "express";
import cors from "cors";
import { projektLista } from "./projects.js";

const app = express();
const PORT = 3001;

app.use(cors());

app.use((req, res, next) => {
  console.log(new Date().toLocaleTimeString("sv-SE"), req.method, req.url);
  next();
});

app.get("/hej", (req, res) => {
  res.json({
    meddelande: "hej från min server!",
    namn: "Markus",
    roll: "Frontendutvecklare under utbildning",
    intressen: ["React", "CSS", "Gaming"],
    });
});

app.get("/tid", (req, res) => {
  res.json({ tid: new Date().toLocaleTimeString("Sv-SE") });
});




app.get("/projekt", (req, res) => {
  res.json(projektLista);
});

app.get("/projekt/:id", (req, res) => {
  const id = Number(req.params.id);
  const hittat = projektLista.find((p) => p.id === id);

  if (!hittat) {
    return res.status(404).json({ fel: "Projektet finns inte" });
  }

  res.json(hittat);
});



app.delete("/projekt/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = projektLista.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ fel: "Projektet finns inte" });
  }

  projektLista.splice(index, 1);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});