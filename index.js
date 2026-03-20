const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Nova alteracao na branch");
});


app.listen(3005, () => {
  console.log("Servidor on");
});