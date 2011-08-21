$(function() {
 window.foodHealth = {};
  _.each(foods, function(val, key, id) {
    foodHealth[key] = {};
    _.each(val.nutrients, function(val2, key2) {
      if (recommendations[val2.id]) {
        var curHealth = 0,
            curNut = recommendations[val2.id];
        _.each(curNut.dos, function(val3, key3) {
          foodHealth[key][conditions[val3]] || (foodHealth[key][conditions[val3]] = 0);
          foodHealth[key][conditions[val3]] += 1;
        });
      }
    });
  });

})();
