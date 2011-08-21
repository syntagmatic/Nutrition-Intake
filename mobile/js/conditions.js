$(function() {

  var cond_template = _.template($('#conditions .template').html());

  var fields_html = _(conditions).reduce(function(html, v, k) {
    return html += cond_template({
      key: k,
      value: v
    });
  }, "");
  $('#conditions').append(fields_html);
});
