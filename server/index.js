const express = require("express");
const router = require("./routes/index");
const cors = require('cors')

const PORT = process.env.PORT || 3333;

const app = express();

app
  .use(cors())
  .use(express.json())
  .use("/api", router);

app.listen(PORT, () => console.log(`lessons_report listening on port ${PORT}!`));
