import React, {useState, useEffect}from 'react';
import Comentarios from "./Components/Comentarios";

function Postagem(props){
  const[apoios, setApoios] = useState(props.apoios)
  const[mostrarComents, setComents] = useState(false);

useEffect(() => {
  let changes = {'apoios': apoios,
                'id': props.id};
  fetch("http://localhost:3000/posts/apoio",{
    method: "POST",
    body: JSON.stringify(changes),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json());

}, [apoios]);


  return (
    <div className="postagem">
          <h1>{props.nome}</h1>
          <p>{props.conteudo}</p>
          <p>{apoios}</p>
          <button type="button" name="button" onClick={() => setApoios(apoios + 1)}>apoiar</button>
          <button type="button" name="butonComment" onClick={() => setComents(true)}>Comentarios
          </button>
          {mostrarComents ? <Comentarios refPost={props.id}/> : <div></div>}
    </div>
  )
}
export default Postagem
