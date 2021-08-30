const express = require('express');

express().listen(3000);

express().get("/factions/tips", (req, res) => {
  let api = require('./factions/tips.json');
  let keys = Object.keys(api.tips).map(elem => parseInt(elem, 10));
  let random = Math.floor(Math.random() * Math.max(...keys));
  res.send(api.tips[random]);
});
