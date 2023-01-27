const app = require("./app");
const dev = require("./config/config");

const PORT = dev.app.port;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
