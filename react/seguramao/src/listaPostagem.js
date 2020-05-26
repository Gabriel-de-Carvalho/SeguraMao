import React from 'react'
import Postagem from "./post.js"

function ListaPostagem(){
  const data = [{"nome": "fulano", "apoio": 15, "conteudo": "algum texto aqui"},
                {"nome": "cricrano", "apoio": 20, "conteudo": "outro texto aqui"},
                {"nome": "bel", "apoio": 30, "conteudo": "mais um texto aqui para proposito de teste"}]

  return(
    <div class="postagens">
    <ul>
      {data.map((e) => <li><Postagem name= {e.nome} conteudo={e.conteudo} apoio = {e.apoio}/></li>)}
    </ul>
  </div>
  )
}

export default ListaPostagem
