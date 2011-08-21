$(function() {

  var cond_template = _.template($('#conditions .template').html());

  var cond_keys = _(conditions).values().sort();
  var fields_html = _(cond_keys).reduce(function(html, cond) {
    return html += cond_template({
      key: getKey(cond, conditions),
      value: cond
    });
  }, "");
  $('#conditions').append(fields_html);

  function getKey(v, obj) {
    for (k in obj) {
      if (obj[k] == v)
        return k;
    }
  };
});
