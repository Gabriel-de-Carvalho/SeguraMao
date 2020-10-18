import React from "react";
import {act} from "react-dom/test-utils";
import {unmountComponentAtNode } from "react-dom";
import {render} from '@testing-library/react';

import Postagem from "./postagem"

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  ummountComponentAtNode(container);
  container.remove();
  container = null;
});

it("primeiro teste, aprendendo", () => {
  act(() => {
    expect(true).toEqual(true);
  })
})
