import React, {useEffect} from 'react';
import "./dados.css";
function Dados(){
  useEffect(() =>{
    fetch("http://localhost:3000/graph/").then(response => response.json()).then(data => console.log(data));
  })

  return(
    <svg id="graph" width="800" height="500">
      <g>
        <line x1="100" x2="100" y1="400" y2="0" class="grid"></line>
      </g>
      <g>
        <line x1="100" x2="500" y1="400" y2="400" class="grid"></line>
      </g>

      <g id="label-x">
          <text y="450" x="100">2005</text>
          <text y="450" x="200">2010</text>
          <text y="450" x="300">2015</text>
          <text y="450" x="400">2015</text>
        </g>
      <g id="label-y">
        <text y="100" x="50">2020</text>
        <text y="200" x="50">2020</text>
        <text y="300" x="50">2020</text>
        <text y="400" x="50">2020</text>

      </g>

      <g>
      <polyline  fill="none" stroke="black" stroke-width="1" points="120,300 200,200 300,250"></polyline>
      <circle cx="120" cy="300" r="3"></circle>
      <circle cx="200" cy="200" r="3"></circle>
      <circle cx="300" cy="250" r="3"></circle>

      </g>
    </svg>
  )
  var graph = document.getElementById("graph");
  graph.width = window.innerWidth;
  graph.height = window.innerHeight;
}

export default Dados;
