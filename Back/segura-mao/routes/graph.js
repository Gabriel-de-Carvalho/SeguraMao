  var express = require('express');
  var router = express.Router();
  var graph = require("../controllers/controllerGraph");

router.get('/', function(req, res, next) {
  res.send(graph.getApoiosRecentes());
})

module.exports = router
