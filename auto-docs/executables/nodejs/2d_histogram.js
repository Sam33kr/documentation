var plotly = require('plotly')('TestBot', 'r1neazxo9w')
var x = [];
var y = [];

for (var i = 0; i < 500; i ++) {
	x[i] = Math.random();
	y[i] = Math.random() + 1;
}


var data = [
  {
    x: x, 
    y: y, 
    type: "histogram2d"
  }
];
var graph_options = {fileopt: "overwrite", filename: "2d-histogram"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});