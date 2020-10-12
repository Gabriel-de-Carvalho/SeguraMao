import React, {useState, useEffect} from 'react';
import Postagem from './postagem.js'

function ListaPostagem(){
  const[postagens, setPostagens] = useState([
  {"nome": "gabriel", "mensagem":"lorem ipslum da vida", "apoios": 10},
  {"nome": "arthur", "mensagem":"lorem ipslum da vida2", "apoios": 9},
  {"nome": "joao", "mensagem":"lorem ipslum da vida3", "apoios": 5}
]);

useEffect(() => {
  fetch("http://localhost:3000/posts").then(response => response.json())
  .then(data => setPostagens(data))
  .catch(error => console.log(error))
});

  return (
    <div class="lista-postagens">
      <ul>
      {postagens.map(c =>(
        <li>
          <Postagem nome={c.nome} conteudo={c.mensagem} apoios={c.apoios}></Postagem>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default ListaPostagem
