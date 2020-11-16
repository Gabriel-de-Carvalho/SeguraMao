import React from 'react'
import {
  Link
} from "react-router-dom";
import "./header.css"

function Header(){
  return (
    <div class="header">
      <nav class="menu-rout">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/dados">Dados</Link></li>
          </ul>
      </nav>
    </div>
  )
}
export default Header
