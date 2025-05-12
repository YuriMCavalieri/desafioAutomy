let axios = require("axios");

const USERNAME = "fldoaogopdege";
const PASSWORD = "ygalepsm";

const getToken = async () => {
  const response = await axios.post("https://appsaccess.automy.com.br/login", {
    username: USERNAME,
    password: PASSWORD
  }, {
    headers: { "Content-Type": "application/json" }
  });

  const token = response.data.token;
  return token;
};

module.exports = { getToken };

if (require.main === module) {
  (async () => {
    try {
      const token = await getToken();
      console.log("Token JWT:", token);
    } catch (err) {
      console.error("Erro ao obter o token:", err.message);
    }
  })();
}
