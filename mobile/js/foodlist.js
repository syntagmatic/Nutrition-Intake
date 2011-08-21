$(function() {

  var foods_template = _.template($('#foods .template').html());

  food_keys = _(foods).keys();
  var foods_html = "";
  _(food_keys).each(function(k) {
    foods_html += foods_template({
      key: foods[k].name
    });
  });
  $('#foods').append(foods_html);
});
