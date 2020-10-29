import React from "react";
import {act} from "react-dom/test-utils";
import ReactDOM from 'react-dom'
import {} from '@testing-library/react';

import Postagem from "./postagem"

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("testando renderização de postagem em diferentes situações", () =>{
  act(() =>{
      ReactDOM.render(<Postagem nome="fernando" conteudo="mensagem1" apoios={15} id={1}/>, container);
  })
  expect(container.querySelector("h1").textContent).toBe("fernando");
  expect(container.querySelectorAll("p")[0].textContent).toBe("mensagem1");
  expect(container.querySelectorAll("p")[1].textContent).toBe("15");


})
it("primeiro teste, aprendendo", () => {
  act(() => {
    expect(true).toEqual(true);
  })
})
