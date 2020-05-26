import React, {useState, useEffect} from 'react'

function Postagem(props){
  const[apoios, setApoios] = useState(props.apoio);

  const apoiar = () => setApoios(apoios + 1);
  
  return(
    <div class="postagem">
     <h1> {props.name} </h1>
     <p> {props.conteudo} </p>
     <p> apoios: {apoios} </p>
     <button type="button" name="button" onClick= {apoiar}> apoiar </button>
     <button type="button" name="button"> denunciar </button>
   </div>
)
};

export default Postagem
