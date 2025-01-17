require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
  console.log(`Server is now running on PORT ${PORT}`);
});
