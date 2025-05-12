const montarMensagem = (baterias) => {
  const hoje = new Date();
  const futuras = [];
  const passadas = [];

  baterias.forEach(b => {
    const data = new Date(b.data_agendamento.split('/').reverse().join('/'));
    b.__dataParsed = data;
    if (data >= hoje) {
      futuras.push(b);
    } else {
      passadas.push(b);
    }
  });

  futuras.sort((a, b) => a.__dataParsed - b.__dataParsed);
  passadas.sort((a, b) => b.__dataParsed - a.__dataParsed);

  let mensagem = `*Próximas baterias agendadas:*\n`;
  futuras.forEach(b => {
    mensagem += `- ${b.data_agendamento} às ${b.horario_agendamento} para ${b.qtde_pessoas} pessoas\n`;
  });

  if (passadas.length > 0) {
    mensagem += `\n Deseja visualizar também suas baterias passadas? Refaça a busca marcando a caixinha`;
  }

  return { mensagem, passadas };
};

module.exports = {montarMensagem};
