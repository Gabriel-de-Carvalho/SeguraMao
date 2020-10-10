import React, {useState}from 'react';

function Postagem(props){
  const[apoios, setApoios] = useState(props.apoios)

  function addApoio() {
    setApoios(apoios + 1);
  }

  return (
    <div class="postagem">
      <li>
          <h1>{props.nome}</h1>
          <p>{props.conteudo}</p>
          <p>{apoios}</p>
          <button type="button" name="button" onClick={() => addApoio()}>ver mais</button>
      </li>
    </div>
  )
}
export default Postagem
