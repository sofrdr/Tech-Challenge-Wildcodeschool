const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

// Env variables

const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const PORT = process.env.PORT || 3000;

// DB connection

mongoose
  .connect(
    `mongodb+srv://${USER}:${PASSWORD}@cluster0.pogo6iu.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.log("Connexion à MongoDB échouée !" + err));

// App configuration

const app = express();
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
