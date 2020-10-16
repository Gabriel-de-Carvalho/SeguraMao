import React, {useState, useEffect}from 'react';

function Postagem(props){
  const[apoios, setApoios] = useState(props.apoios)

useEffect( () => {
  let changes = {'apoios': apoios,
                'id': props.id};
  fetch("http://localhost:3000/posts/apoio",{
    method: "POST",
    body: JSON.stringify(changes),
    header:{
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json());

})


  return (
    <div class="postagem">
      <li>
          <h1>{props.nome}</h1>
          <p>{props.conteudo}</p>
          <p>{apoios}</p>
          <button type="button" name="button" onClick={() => setApoios(apoios + 1)}>apoiar</button>
      </li>
    </div>
  )
}
export default Postagem
