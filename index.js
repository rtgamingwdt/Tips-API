const express = require('express');

express().listen(process.env.PORT || 5000);

express().get("/factions", (req, res) => {
  let api = require('./factions/tips.json');
  let keys = Object.keys(api.tips).map(elem => parseInt(elem, 10));
  let random = Math.floor(Math.random() * Math.max(...keys));
  res.send(api.tips[random]);
});
