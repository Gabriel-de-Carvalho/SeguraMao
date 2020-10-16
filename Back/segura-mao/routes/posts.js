var express = require('express');
var router = express.Router();

var falseDados = [{"nome": "john", "mensagem":"lorem ipslum da vida", "apoios": 10, "id": 1},
  {"nome": "arthur", "mensagem":"lorem ipslum da vida2", "apoios": 9,  "id": 2},
  {"nome": "joao", "mensagem":"lorem ipslum da vida3", "apoios": 5,  "id": 3}];

router.get('/', function(req, res, next) {
  res.json(falseDados);
})

router.post("/", function(req, res, next) {
  falseDados.push(req.body);
  res.json(falseDados);
  res.status(200);
})

router.post('/apoio', function(req, res, next){
  let data = req.body
  let apoios = data.apoios;
  let id = data.id;
  for(i = 0; i < falseDados.length; i++){
    if(falseDados[i].id == id){
      falseDados[i] = {...falseDados[i], "apoios": apoios}
    }
  }
  res.json(falseDados);
})
module.exports = router
