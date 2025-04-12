const express = require('express');
const router = express.Router();

router.get('/dados', (req, res) => {
  res.json({ mensagem: 'Dados recebidos com sucesso!' });
});

router.post('/enviar', (req, res) => {
  const dados = req.body;
  res.json({ mensagem: 'Dados enviados com sucesso!', dados });
});

module.exports = router;
