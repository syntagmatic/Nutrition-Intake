$(function() {

  var foods_template = _.template($('#foods .template').html());
  var nutrient_template = _.template($('#foods .inner-template').html());

  // Update RDI values if form submission
  var rdi_updates = getUrlVars();
  if (_(rdi_updates).size() > 1) {
    for (i in rdi_updates) {
       recommendations[i]['rdi'] = rdi_updates[i];
    }
  }

  food_keys = _(foods).keys().slice(800,803);
  var foods_html = "",
      nutrients_html = "";
  /*
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
*/
  _(recommendations).each(function(v, k) {
    foods_html += foods_template({
      key: nutrients[k].name
    });
    foods_html += "<span class='row'>";
    _(food_keys).each(function(f) {
      _(foods[f]['nutrients']).each(function(nut) {
        if (nut.id == k) {
          var rdiW = rdi(nut);
          foods_html += nutrient_template({
            key: foods[f].name,
            value: rdiW,
            width: rdiW
          });
        }
      });
    });
    foods_html += "<span class='clear'></span></span><span class='clear'></span>";
  });
  $('#foods').append(foods_html);
  
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
