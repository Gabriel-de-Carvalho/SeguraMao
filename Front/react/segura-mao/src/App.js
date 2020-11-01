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
    <Router>
      <Header/>

      <Switch>

        <Route path="/" exact>
          <ListaPostagem />
        </Route>

          <Route path="/login">
            <Perfil/>
        </Route>

        <Route path="/dados">
            <Dados/>
        </Route>

      </Switch>

    <Footer/>
  </Router>
  );
}

export default App;
