$(function() {

var w = 960, 
    h = 960,
    format = d3.format(",d"),
    fill = d3.scale.category20b();

var data = [{
  "name": "vegetables",
  "nutrients": foodgroups[1100].foods
}]

$('h1').text(data[0].name);

var pack = d3.layout.pack()
    .size([w - 4, h - 4])
    .sort(null)
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
    .style("fill", function(d) {return _.isUndefined(nutrients[d.id]) ? "#aaa" : fill(nutrients[d.id].name)})
    .attr("class", function(d) {
     return _.isUndefined(nutrients[d.id]) ? "" : "nut c" + d.id;
    })
    .attr("fill-opacity", function(d) {return _.isUndefined(nutrients[d.id]) ? 0.5 : 0.7});

$('.nut').hover(function() {
  var curC = $(this).attr("class").substr(4);
  $('.'+curC).css({"fill-opacity":"1"});
  $('h2').text(nutrients[parseFloat(curC.substr(1))].name);
}, function() {
  var curC = $(this).attr("class").substr(4);
  $('.'+curC).css({"fill-opacity":".7"});
  $('h2').text("");
});

});
