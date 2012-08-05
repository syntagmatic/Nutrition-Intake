function has(id, nuts) {
  return _(nuts).detect(function(d) {
    return d.id == id;
  });
};

function like(str, name) {
  return name.toLowerCase().indexOf(str) != -1;
};

function get(obj, key) {
  if (!obj)
    return null;
  if (key in obj)
    return obj[key];
  else
    return null;
}

var transformed = [];

_(foodgroups).each(function(group) {
  var transformed_group = _(group.foods)
    .chain()
    .filter(function(food) {
      var nuts = food.nutrients;
      return true;
      /*       !(like('powder', food.name)) &&
             !(like('dehydrated', food.name)) &&
             !(like('dried', food.name)) &&
             !(like('raw', food.name)) &&
             !(like('like', food.name)) &&
             !(like('variety', food.name)) &&
             !(like('loin', food.name)) &&
             !(like('reduced', food.name)) &&
             !(like('loin', food.name)) &&
             !(like('diced', food.name)) &&
             !(like('campbell', food.name)) &&
             !(like('prepared', food.name)) &&
             !(like('fat', food.name)) &&
             !(like('frozen', food.name)) &&
             !(like('gluten', food.name)) &&
             !(like('archway', food.name)) &&
             !(like('silk', food.name)) &&
             !(like('vita', food.name)) &&
             !(like('breyers', food.name)) &&
             !(like('canned', food.name)) &&
             !(like('imitation', food.name)) &&
             !(like('substitute', food.name)) &&
             !(like('adobo fresco', food.name)) &&
             !(like('agents', food.name)) &&
             !(like('salt, table', food.name)) &&
             !(like('broilers', food.name)) &&
             !(like('cured', food.name)) &&
             !(like('chuck', food.name)) &&
             !(like('domestic', food.name)) &&
             !(like('stewing', food.name)) &&
             !(like('cooked', food.name)) &&
             !(like('with', food.name)) &&
             !(like('fast', food.name)) &&
             !(like('meal', food.name)) &&
             !(like('tablets', food.name)) &&
             !(like('crude', food.name)) &&
             !(like('acerola', food.name)) &&
             !(like('usda', food.name)) &&
             !(like('low', food.name)) &&
             !(like('yeast', food.name)) &&
             !(like('ready-to-eat', food.name)) &&
             !(like('ready-to-serve', food.name)) &&
             !(like('flour', food.name)) &&
             !(like('formulated bar', food.name)) &&
             !(like('louis rich', food.name)) &&
             !(like('classes', food.name)) &&
             !(like('roasters', food.name)) &&
             !(like('young', food.name)) &&
             !(like('homemade', food.name)) &&
             !(like('soy protein', food.name)) &&
             !(like('soy sauce', food.name)) &&
             !(like('hips', food.name)) &&
             !(like('dry', food.name)); */
      })
    .map(function(food) {
      return {
        name: food.name,
        group: group.name,
        "protein (g)": get(_(food.nutrients).find(function(d) { return d.id == "203" }), 'amount'),
        "calcium (g)": get(_(food.nutrients).find(function(d) { return d.id == "301" }), 'amount') / 1000,      // mg
        "sodium (g)": get(_(food.nutrients).find(function(d) { return d.id == "307" }), 'amount') / 1000,       // mg
        "fiber (g)": get(_(food.nutrients).find(function(d) { return d.id == "291" }), 'amount'),
        "vitaminc (g)": get(_(food.nutrients).find(function(d) { return d.id == "401" }), 'amount') / 1000,     // mg
        "potassium (g)": get(_(food.nutrients).find(function(d) { return d.id == "306" }), 'amount') / 1000,    // mg
        "carbohydrate (g)": get(_(food.nutrients).find(function(d) { return d.id == "205" }), 'amount'),
        "sugars (g)": get(_(food.nutrients).find(function(d) { return d.id == "269" }), 'amount'),
        "fat (g)": get(_(food.nutrients).find(function(d) { return d.id == "204" }), 'amount'),
        "water (g)": get(_(food.nutrients).find(function(d) { return d.id == "255" }), 'amount'),
        "calories": get(_(food.nutrients).find(function(d) { return d.id == "208" }), 'amount'),
        "saturated (g)": get(_(food.nutrients).find(function(d) { return d.id == "606" }), 'amount'),
        "monounsat (g)": get(_(food.nutrients).find(function(d) { return d.id == "645" }), 'amount'),
        "polyunsat (g)": get(_(food.nutrients).find(function(d) { return d.id == "646" }), 'amount'),
//        cholesterol: _(food.nutrients).find(function(d) { return d.id == "601" }).amount,
      }
      })
    .sortBy(function(d) { return d.name; })
    .value();

  transformed = transformed.concat(transformed_group);
});

  $('body').html("var foods= " + JSON.stringify(transformed) + ";");

