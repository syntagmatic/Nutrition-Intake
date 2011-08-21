$ ->
  template = {}

  nut_template = _.template $('#nutrients .template').html()
  nut_html = _(nutrients).reduce (html, nut) ->
    html += nut_template
      nutrient: nut.name
  , ""
  $('#nutrients').append nut_html

  food_subset = _(foods).keys().slice(0,101)
  food_template = _.template $('#foods .template').html()
  food_html = _(food_subset).reduce (html, key) ->
    html += food_template
      food: foods[key].name
  , ""
  $('#foods').append food_html
