$(function() {

  var foods_template = _.template($('#foods .template').html());
  var nutrient_template = _.template($('#foods .inner-template').html());

  food_keys = _(foods).keys().slice(800,901);
  var foods_html = "";
  _(food_keys).each(function(k) {
    foods_html += foods_template({
      key: foods[k].name
    });
    _(foods[k]['nutrients']).each(function(nut) {
      if (nut.id in recommendations) {
        foods_html += nutrient_template({
          key: nutrients[nut.id].name,
          value: rdi(nut),
          width: Math.round(rdi(nut))
        });
      }
    });
  });
  $('#foods').append(foods_html);

  // percent of rdi for a nutrient
  function rdi(nutrient, value) {
    var fraction = nutrient.amount/recommendations[nutrient.id]['rdi'];
    return Math.round(fraction*1000)/10
  };
});
