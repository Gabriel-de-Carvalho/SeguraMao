import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListaPostagem from './listaPostagem.js'
import Header from './header.js'
import Footer from './footer.js'
import Dados from './pages/dados'
import Perfil from './pages/perfil'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div class="grid-template">
      <Router>
        <div class="header-main">
      <Header/>
    </div>

      <div class="main-content">
      <Switch>
        <Route path="/" exact>
          <ListaPostagem class="list-posts" />
        </Route>

          <Route path="/login">
            <Perfil class="perfil"/>
        </Route>

        <Route path="/dados">
            <Dados class="dados"/>
        </Route>

      </Switch>
    </div>

    <div class="footer-main">
      <Footer/>
    </div>
    </Router>

  </div>
  );
}

export default App;
