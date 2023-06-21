const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

app.use(cors());
// Definindo a rota GET
app.get("/teste", (req, res) => {
  res.status(200).json({});
});

// Definindo a rota GET
app.get("/pokemon/:param", (req, res) => {
  setTimeout(async () => {
    const result = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${req.params.param}`)
      .then((result) => result.data)
      .catch((err) => console.log("ERRO", req.params));

    res.status(200).json(result);
  }, 2000);
});

// Iniciando o servidor na porta 3000
app.listen(3005, () => {
  console.log("Servidor iniciado na porta 3005");
});
