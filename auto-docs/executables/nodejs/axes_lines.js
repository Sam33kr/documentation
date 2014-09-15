var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var trace1 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [8, 7, 6, 5, 4, 3, 2, 1, 0], 
  type: "scatter"
};
var trace2 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  type: "scatter"
};
var data = [trace1, trace2];
var layout = {
  xaxis: {
    showgrid: true, 
    zeroline: true, 
    showline: true, 
    mirror: "ticks", 
    gridcolor: "#bdbdbd", 
    gridwidth: 2, 
    zerolinecolor: "#969696", 
    zerolinewidth: 4, 
    linecolor: "#636363", 
    linewidth: 6
  }, 
  yaxis: {
    showgrid: true, 
    zeroline: true, 
    showline: true, 
    mirror: "ticks", 
    gridcolor: "#bdbdbd", 
    gridwidth: 2, 
    zerolinecolor: "#969696", 
    zerolinewidth: 4, 
    linecolor: "#636363", 
    linewidth: 6
  }
};
var graph_options = {layout: layout, fileopt: "overwrite", filename: "axes-lines"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});