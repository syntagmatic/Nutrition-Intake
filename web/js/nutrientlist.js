$(function() {

  var nutrients_template = _.template($('#nutrients .template').html());

  nutrient_keys = _(nutrients).keys();
  var nutrients_html = "";
  _(nutrient_keys).each(function(k) {
    nutrients_html += nutrients_template({
      key: nutrients[k].name
    });
  });
  $('#nutrients').append(nutrients_html);
});
