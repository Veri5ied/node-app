const express = require("express");

const app = express();

app.use((req, res) => {
  res.json("Hello World of Express");
});

module.exports = app;
