var express = require('express');
var router = express.Router();

var falseDados = [
  {"nome": "gabriel", "mensagem":"lorem ipslum da vida", "apoios": 10},
  {"nome": "arthur", "mensagem":"lorem ipslum da vida124124124", "apoios": 9},
  {"nome": "joao", "mensagem":"lorem ipslum da vida0000000000000", "apoios": 5}
]

router.get('/', function(req, res, next) {
  res.json(falseDados);
})

router.post("/", function(req, res, next) {
  falseDados.push(req.body);
  res.json(falseDados);
  res.status(200);
})

module.exports = router