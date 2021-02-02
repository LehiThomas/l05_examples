////////////////////////////////////////////////////////////////
//
// This javascript example shows a simple d3 data join
//
// Author: Joshua Levine
// Date: Feb. 1, 2021
//
////////////////////////////////////////////////////////////////


let svg = d3.select("#div1").append("svg")


svg.attr("width", 400)
  .attr("height", 400)


let dataArray1 = [2,3,5,7,11,13,17,19,23,29];
let dataArray2 = [29,23,19,17,13,11,7,5,3,2];



svg.selectAll("rect")
  .data(dataArray1)
  .enter()
  .append("rect")
  .attr("x", (x,i) => i*25)
  .attr("y", function(d) { return 400 - d*10; })
  .attr("width", 20)
  .attr("height", function(d) { return d*10; } )
  .attr("fill", d3.rgb(255,0,0));

