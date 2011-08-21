$(function() {

  var foods_template = _.template($('#foods .template').html());
  var nutrient_template = _.template($('#foods .inner-template').html());

  food_keys = _(foods).keys().slice(200,221);
  var foods_html = "";
  _(food_keys).each(function(k) {
    foods_html += foods_template({
      key: foods[k].name
    });
    _(foods[k]['nutrients']).each(function(nut) {
      foods_html += nutrient_template({
        key: nutrients[nut.id].name,
        value: Math.round(nut.amount*1000)/1000
      });
    });
  });
  $('#foods').append(foods_html);
});
