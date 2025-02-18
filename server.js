const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Euuu amooooo backend 🚀🚀 ");
});

app.listen(PORT, () =>{
    console.log(`Servidor rodando na http://localhost ${PORT}`);
});
