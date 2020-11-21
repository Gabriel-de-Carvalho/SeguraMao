import React from "react";
export default function Comentario(props){
  return(
    <div>
        <h1>{props.autor}</h1>
        <p>{props.mensagem}</p>
    </div>
  )
}
