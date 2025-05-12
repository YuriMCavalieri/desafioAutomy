const express = require('express');
const cors = require('cors');
const { buscarBateriasPorEmail } = require('./functions/getBaterias');
const { montarMensagem } = require('./functions/message');

const app = express();
const PORT = 3000;

// Habilita CORS para o frontend
app.use(cors());
app.use(express.json());

// Rota que o frontend irá chamar
app.get('/api/baterias', async (req, res) => {
  const { email, verPassadas } = req.query;

  if (!email) {
    return res.status(400).json({ erro: 'Email é obrigatório.' });
  }

  try {
    const baterias = await buscarBateriasPorEmail(email);
    const { mensagem, passadas } = montarMensagem(baterias);

    res.json({
      mensagem,
      passadas: verPassadas === 'true' ? passadas : [],
    });
  } catch (err) {
    console.error('Erro no backend:', err.message);
    res.status(500).json({ erro: 'Erro ao processar requisição.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend rodando em http://localhost:${PORT}`);
});
