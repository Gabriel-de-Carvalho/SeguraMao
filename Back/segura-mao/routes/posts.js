var express = require('express');
var router = express.Router();
var controllerPosts = require("../controllers/controllerPosts");


router.get('/', function(req, res, next) {
  res.json(controllerPosts.posts);
})

router.get("/:id/coments", function(req, res, next){
  res.json(controllerPosts.retornarComentario(req.params.id));
})

router.post("/", function(req, res, next) {
  let retorno = controllerPosts.novoPost(req.body);
  res.json(retorno);
  res.status(200);
})

router.post('/apoio', function(req, res, next){
  let retorno = controllerPosts.processar(req.body);
  res.json(retorno);
})
module.exports = router
