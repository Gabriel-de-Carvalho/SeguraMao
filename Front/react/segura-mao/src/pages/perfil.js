import React from 'react';
import UserContext from "../userContext"
function Perfil(){
  return (
    <UserContext.Consumer>
      {({user}) =>
      (  <div>
          <h2>Nome: {user.name}</h2>
          <p>email: {user.email}</p>
          <p>posts apoiados:</p>
          <button>deletar conta:</button>
        </div>)
      }
    </UserContext.Consumer>

  )
}

export default Perfil;
