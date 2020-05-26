import React from 'react'

function Postagem(props){
  return(
    <div class="postagem">
     <h1> {props.name} </h1>
     <p> {props.conteudo} </p>
     <p> apoios: {props.apoio} </p>
     <button type="button" name="button"> ver mais </button>
   </div>
)
};

export default Postagem
