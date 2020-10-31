import React from 'react'
import {
  Link
} from "react-router-dom";

function Header(){
  return (
    <div>
      <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/criar">Criar Postagem</Link></li>
          </ul>
      </nav>
    </div>
  )
}
export default Header
