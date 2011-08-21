$(function() {
  var rda = {
    'Cholesterol' : 20,
    'Fat' : 50,
    'Sugar' : 120,
  };

  var rda_template = _.template($('#rda .template').html());

  var fields_html = _(rda).reduce(function(html, v, k) {
    return html += rda_template({
      key: k,
      value: v
    });
  }, "");
  $('#rda').append(fields_html);
});
