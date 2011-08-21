$(function() {

  var template = {};

  var nut_template = _.template($('#nutrients .template').html());
   
    /*
   var nut_html = _(nutrients).reduce(function(html, nut) {
    return html += nut_template({
      nutrient: nut.name
    });
  }, "");
  var rec_html = _(recommendations).reduce(function(html, nut, k) {
    return html += nut_template({
      nutrient: nutrients[k].name
    });
  });
  $('#nutrients').append(rec_html);
  */

  var food_subset = _(foods).keys().slice(0, 21);
  var food_template = _.template($('#foods .template').html());
  var food_html = _(food_subset).reduce(function(html, key) {
    return html += food_template({
      food: foods[key].name,
      nuts: foods[key].nutrients
    });
  }, "");
  $('#foods').append(food_html);

});
