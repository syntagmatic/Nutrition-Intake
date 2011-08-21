$(function() {

  var foods_template = _.template($('#foods .template').html());
  var foodpick_template = _.template($('#foodpick .template').html());
  var nutrient_template = _.template($('#foods .inner-template').html());

  var food_names = _(foods).map(function(v,k) {
    return {
      key: k,
      name: v.name
    };
  });

  var food_keys = _(food_names).chain()
                               .sortBy(function(i) { return i.name })
                               .pluck('key')
                               .value();

  // Dropdown
  var foodpick_html = "";
  _(food_keys).each(function(k) {
    foodpick_html += foodpick_template({
      key: k,
      value: foods[k].name
    });
  });
  $('#foodpick').html(foodpick_html);

  $('#foodpick').change(function() {
    var picked_food = [$(this).val()];
    render(picked_food);
  });

  $('#foodpick').val('09038').change();

  // Update RDI values if form submission
  var rdi_updates = getUrlVars();
  if (_(rdi_updates).size() > 1) {
    for (i in rdi_updates) {
       recommendations[i]['rdi'] = rdi_updates[i];
    }
  }

  function render(food_keys) {
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
    $('#foods').html(foods_html);
  };

  // percent of rdi for a nutrient
  function rdi(nutrient, value) {
    var fraction = nutrient.amount/recommendations[nutrient.id]['rdi'];
    return Math.round(fraction*1000)/10
  };

  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }

});
