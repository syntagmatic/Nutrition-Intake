$(function() {

  var foods_template = _.template($('#foods .template').html());

  food_keys = _(foods).keys();
  console.log(food_keys.length);
  var fields_html = _(foods).reduce(function(html, v, k) {
    return html += foods_template({
      key: v.name
    });
  }, "");
  $('#foods').append(fields_html);
});
