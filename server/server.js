import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());

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

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
