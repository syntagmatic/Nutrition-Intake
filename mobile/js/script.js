$(function() {
  var food_html, food_subset, food_template, nut_html, nut_template, template;
  template = {};
  nut_template = _.template($('#nutrients .template').html());
  nut_html = _(nutrients).reduce(function(html, nut) {
    return html += nut_template({
      nutrient: nut.name
    });
  }, "");
  food_subset = _(foods).keys().slice(0, 21);
  food_template = _.template($('#foods .template').html());
  food_html = _(food_subset).reduce(function(html, key) {
    return html += food_template({
      food: foods[key].name,
      nuts: foods[key].nutrients
    });
  }, "");
  return $('#foods').append(food_html);
});