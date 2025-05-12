import { useState } from 'react';
import './Home.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [verPassadas, setVerPassadas] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');
  const [bateriasPassadas, setBateriasPassadas] = useState([]);

  const isEmailValido = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleBuscar = async () => {
    if (!email || !isEmailValido(email)) {
      setErro('Por favor, insira um email válido.');
      return;
    }

    try {
      setErro('');
      setMensagem('Buscando informações...');
      setBateriasPassadas([]);

      const response = await fetch(`/api/baterias?email=${email}&verPassadas=${verPassadas}`);
      const data = await response.json();

      if (response.ok) {
        setMensagem(data.mensagem || 'Nenhuma mensagem disponível.');
        setBateriasPassadas(data.passadas || []);
      } else {
        setErro(data.erro || 'Erro ao buscar baterias.');
        setMensagem('');
      }
    } catch (err) {
      setErro('Erro de conexão com o servidor.');
      setMensagem('');
    }
  };

  return (
    <div className="container">
      <img src="/logo.png" alt="Logo" className="logo" />
      <h1>Consultar Baterias</h1>

      <div>
        <label>Email do Cliente:</label>
        <input
          type="email"
          value={email}
          placeholder="ex: cliente@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label>
          <input
            type="checkbox"
            checked={verPassadas}
            onChange={(e) => setVerPassadas(e.target.checked)}
          />
          Incluir baterias passadas
        </label>
      </div>

      <button onClick={handleBuscar}>Buscar Baterias</button>

      {erro && <p className="error">{erro}</p>}
      {mensagem && <div className="mensagem">{mensagem}</div>}

      {bateriasPassadas.length > 0 && (
        <>
          <h2 style={{ marginTop: '2rem' }}>📂 Baterias Passadas</h2>
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Horário</th>
                <th>Pessoas</th>
                <th>Nome</th>
                <th>Telefone</th>
              </tr>
            </thead>
            <tbody>
              {bateriasPassadas.map((b, index) => (
                <tr key={index}>
                  <td>{b.data_agendamento}</td>
                  <td>{b.horario_agendamento}</td>
                  <td>{b.qtde_pessoas}</td>
                  <td>{b.nome}</td>
                  <td>{b.telefone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Home;
