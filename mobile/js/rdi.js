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

  window.colors = {};
  
  _(food_keys).each(function(k, i) {
    colors['c'+k] = {
      color:Raphael.getColor()
    }
  });
  _(recommendations).each(function(v, k) {
    foods_html += foods_template({
      key: nutrients[k].name
    });
    foods_html += "<span class='row'>";
    _(food_keys).each(function(f, a) {
      _(foods[f]['nutrients']).each(function(nut) {
        if (nut.id == k) {
          var rdiW = rdi(nut);
          foods_html += nutrient_template({
            key: foods[f].name,
            value: rdiW,
            width: rdiW,
            classN: 'c'+f
          });
        }
      });
    });
    foods_html += "<span class='clear'></span></span><span class='clear'></span>";
  });
  $('#foods').append(foods_html);
   
  $('bar').hover(function() {
    var curClass = $(this).attr('class');
    $('.'+curClass).css({'background-color':colors[curClass].color});
    $('h2').text(foods[curClass.substring(1)].name);
  }, function() {
    $('bar').css({'background-color':'transparent'});
    $('h2').text('');
  });
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
