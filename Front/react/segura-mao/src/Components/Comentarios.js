import React, {useState, useEffect} from 'react';

export default function Comentarios(props){
  const[comentarios, setComentarios] = useState([]);
  useEffect( () =>{
    fetch("http://localhost:3000/posts/"+ props.refPost+"/coments").then(response => response.json()).then(dados => setComentarios(dados));
  })
  return(
    <ul>
    {comentarios.map(c => (
      <li>
        <h3>{c.usuario}</h3>
        <p>{c.comentario}</p>
      </li>
    ))}

    </ul>
  )
}
