import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ListaPostagem from './listaPostagem.js'
import Header from './header.js'
import Footer from './footer.js'

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <ListaPostagem />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
