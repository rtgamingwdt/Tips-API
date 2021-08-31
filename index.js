const express = require('express');
const app = express();

app.get("/factions", (req, res) => {
  let api = require('./factions/tips.json');
  let keys = Object.keys(api.tips).map(elem => parseInt(elem, 10));
  let random = Math.floor(Math.random() * Math.max(...keys));
  res.send(api.tips[random]);
});

app.use((req, res) => {
  res.send({ message: "Something went wrong.", error: "404: Page was not found"});
});

app.listen(process.env.PORT);
