$(function() {

  var rdi_template = _.template($('#rdi .template').html());

  var fields_html = _(recommendations).reduce(function(html, v, k) {
    return html += rdi_template({
      name: nutrients[k].name,
      key: k,
      value: v['rdi'],
      unit: v['unit']
    });
  }, "");
  $('#rdi').append(fields_html);
});
