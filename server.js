const express = require("express");
const path = require("path");

const app = express();
const PORT = 3030;

// Servir o arquivo CSS na rota '/styles.css'
app.use("/styles.css", (req, res) => {
  res.sendFile(path.join(__dirname, "styles.css"));
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
