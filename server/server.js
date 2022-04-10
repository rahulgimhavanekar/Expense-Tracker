const express = require("express");
const cors = require("cors");
const db = require("./db/db");
require("dotenv").config({ path: "./config.env" });

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

db.on("open", () => {
  console.log("Database connection established");
});

app.get("/", (req, res) => {
  res.send("Hey there");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
