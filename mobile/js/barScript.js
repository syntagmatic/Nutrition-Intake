var getFoodHealth = function(i) {
  var foodHealth = {};
  var count = 0;
  if (count < i) {
    _.each(foods, function(val, key, id) {
      foodHealth[key] = {};
      _.each(val.nutrients, function(val2, key2) {
        if (recommendations[val2.id]) {
          var curHealth = 0,
              curNut = recommendations[val2.id];
          _.each(curNut.dos, function(val3, key3) {
            if (!_.isUndefined(colorConditions[val3])) {
              foodHealth[key][colorConditions[val3].name] || (foodHealth[key][colorConditions[val3].name] = 0);
              foodHealth[key][colorConditions[val3].name] += 1;
            }
          });
        }
      });
    });
  }
  count++;
  return foodHealth;
}

var makeColorConditions = function() {
  window.condColor = {};
  _.each(conditions, function(val, key) {
    condColor[key] = {
      'name':conditions[key],
      'color':Raphael.getColor()
    };
  });
}
