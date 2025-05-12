# 🏎️ Desafio Automy - Consulta de Baterias Agendadas

Este projeto implementa uma aplicação completa com **frontend em React** e **backend em Node.js**, integrando-se a uma API com autenticação via JWT para consultar baterias agendadas por e-mail. A aplicação permite exibir baterias futuras e, se o cliente desejar, também baterias passadas.

---

## 📌 Funcionalidades

- Autenticação via JWT
- Consulta a API interna por meio de query SQL
- Separação de baterias futuras e passadas
- Mensagens personalizadas com resumo
- Integração frontend + backend via proxy
- Interface responsiva e intuitiva

---

## ⚙️ Tecnologias utilizadas

| Camada     | Tecnologia                         |
|------------|------------------------------------|
| Frontend   | [React](https://react.dev) + Vite |
| Estilo     | CSS customizado                    |
| Backend    | Node.js + Express + Axios          |
| Deploy Dev | Docker + Docker Compose            |
| Build Front| Vite + NGINX (opcional)            |

---

## 📁 Estrutura de pastas

desafio-automy/
├── frontend/ # Interface React
│ ├── src/ # Componentes e telas
│ ├── public/logo.png # Logo exibido no topo
│ └── Dockerfile # Build + nginx (produção)
├── functions/ # Funções auxiliares (auth, query, mensagem)
├── index.js # Servidor Express
├── Dockerfile # Backend
├── docker-compose.yaml # Orquestra os serviços
├── nginx.conf # Configuração do nginx (produção)
└── doc.md


## 🚀 Como rodar o projeto (modo desenvolvimento)

> ✅ Recomendado para testes e avaliação

1. **Clone o repositório**

```bash

git clone https://github.com/seu-usuario/desafio-automy.git
cd desafio-automy

2. Inicie o backend com Docker

bash
Copiar
Editar
docker compose up
O backend estará disponível em http://localhost:3000

3. Inicie o frontend localmente

bash
Copiar
Editar
cd frontend
npm install
npm run dev
O frontend estará disponível em http://localhost:5173

🐳 Como rodar tudo via Docker (produção)
⚠️ Somente se optar por rodar frontend via nginx

Build completo:

bash
Copiar
Editar
docker compose down --volumes --remove-orphans
docker compose up --build
Acesse:

Frontend: http://localhost:5173

Backend: http://localhost:3000/api/baterias

📦 Dependências principais
Backend
express
axios
cors
docker

Frontend
react
react-dom
vite

✅ Exemplos de uso
Consulta de baterias
Digite o e-mail do cliente

Marque a opção "Incluir baterias passadas" se desejar

Clique em Buscar Baterias

🛠️ Comandos úteis
Comando	Descrição
npm run dev (frontend)	Inicia o frontend em modo dev
docker compose up	Sobe o backend com Docker
docker compose up --build	Recompila todos os serviços
docker compose down	Encerra os containers



