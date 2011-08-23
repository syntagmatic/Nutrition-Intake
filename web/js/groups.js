$(function() {

var w = 960, 
    h = 960,
    format = d3.format(",d");

var data = [{
  "name": "vegetables",
  "nutrients": foodgroups[1100].foods
}]

var pack = d3.layout.pack()
    .size([w - 4, h - 4])
    .value(function(d) { return d.amount; })
    .children(function(d) {return d.nutrients;});

var vis = d3.select("#main").append("svg:svg")
    .attr("width", w)
    .attr("height", h)
    .attr("class", "pack")
    .append("svg:g")
    .attr("transform", "translate(2, 2)");

var node = vis.data(data).selectAll('g.node')
    .data(pack.nodes)
    .enter().append('svg:g')
    .attr('transform', function(d) { return "translate(" + d.x + "," + d.y + ")";});

node.append("svg:title")
    .text(function(d) {return d.name || nutrients[d.id].name});

node.append("svg:circle")
    .attr("r", function(d) {return d.r})
    .attr("fill-opacity", 0.2);
});
