const express = require("express");
const cors = require('cors')
const mongoose = require('mongoose')

const router = require("./routes/index");


const PORT = process.env.PORT || 3333;
const app = express();

app
  .use(cors())
  .use(express.json())
  .use("/api", router);

const start = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/smalltalk')
    console.log('connected')
    app.listen(PORT, () => console.log(`lessons_report listening on port ${PORT}!`));
  } catch (e) {
    console.log(e)
  }
}

start()







