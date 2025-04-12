const express = require('express');
const path = require('path');
const app = express();

// Porta alternativa (sem conflito com a 3000)
const port = 3002;

// Servir arquivos estáticos da pasta frontend
app.use(express.static(path.join(__dirname, '../frontend/frontend')));

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
