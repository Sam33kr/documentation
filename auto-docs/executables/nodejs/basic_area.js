var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var trace1 = {
  x: [1, 2, 3, 4], 
  y: [0, 2, 3, 5], 
  fill: "tozeroy", 
  type: "scatter"
};
var trace2 = {
  x: [1, 2, 3, 4], 
  y: [3, 5, 1, 7], 
  fill: "tonexty", 
  type: "scatter"
};
var data = [trace1, trace2];
var graph_options = {fileopt: "overwrite", filename: "basic-area"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});