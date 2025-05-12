const axios = require('axios');
const { getToken } = require('./auth');

/**
 * Consulta baterias agendadas para um cliente com base no e-mail fornecido.
 * @param {string} email - E-mail do cliente.
 * @returns {Promise<Array>} Lista de baterias relacionadas ao e-mail.
 */
const buscarBateriasPorEmail = async (email) => {
  if (!email || typeof email !== 'string') {
    throw new Error('Email inválido');
  }

  try {
    const token = await getToken();
    const query = `SELECT * FROM desafio.cadastro_baterias_desafio WHERE email = '${email}'`;

    const response = await axios.post(
      'https://appsaccess.automy.com.br/api/api/desafio/custom/do/query',
      {
        query,
        db: 'desafio',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Erro ao buscar baterias:', error.message);
    throw error;
  }
};

module.exports = { buscarBateriasPorEmail };
