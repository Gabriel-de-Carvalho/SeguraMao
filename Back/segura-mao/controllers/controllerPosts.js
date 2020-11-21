// var falseDados = [{"nome": "john", "mensagem":"lorem ipslum da vida", "apoios": 10, "id": 1},
//   {"nome": "arthur", "mensagem":"lorem ipslum da vida2", "apoios": 9,  "id": 2},
//   {"nome": "joao", "mensagem":"lorem ipslum da vida3", "apoios": 5,  "id": 3}];

var usuarios = [{"nome": "john", "sobreNome":"fulano", "email":"john@gmail.com"},
{"nome": "arthur", "sobreNome": "vieira", "email":"arthur@gmail.com"},
{"nome": "joao", "sobreNome": "barros", "email":"joao@gmail.com"}]

var posts = [{"nome":"john","mensagem": "lorem ipsum da vida", "apoios": 10, "id": 1},
{"nome": "arthur", "mensagem":"lorem ipslum da vida2", "apoios": 9,  "id": 2},
{"nome": "joao", "mensagem":"lorem ipslum da vida3", "apoios": 5,  "id": 3}]

var coments = [{"comentario":"uau", "usuario":"arthur", "postRef":1, "id":1},
{"comentario":"buga ooga", "usuario":"john", "postRef":2, "id":2},
{"comentario":"big johnson", "usuario":"arthur", "postRef":2, "id":3},]

function processar(data){
  let apoios = data.apoios;
  let id = data.id;
  for(i = 0; i < posts.length; i++){
    if(posts[i].id == id){
      posts[i].apoios = apoios;
    }
  }
  return posts;
}

function retornarComentario(id){
    var comentarios = [];
    coments.map((c) => {if(c.postRef == id){comentarios.push(c)}});
    return comentarios;
}


function novoPost(post){
  posts.push(post);
  return posts;
}


module.exports = {processar, posts, retornarComentario}
