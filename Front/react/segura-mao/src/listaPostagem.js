import React, {useState, useEffect} from 'react';
import Postagem from './postagem.js'
import "./listaPostagem.css"

function ListaPostagem(){
  const[postagens, setPostagens] = useState([
]);

useEffect(() => {
  fetch("http://localhost:3000/posts").then(response => response.json())
  .then(data => setPostagens(data))
  .catch(error => console.log(error))
}, []);

  return (
    <div class="lista-postagens">
      <ul>
      {postagens.map(c =>(
        <li>
          <Postagem nome={c.nome} conteudo={c.mensagem} apoios={c.apoios} id={c.id}></Postagem>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default ListaPostagem
