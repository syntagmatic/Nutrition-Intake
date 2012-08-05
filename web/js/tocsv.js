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

var nutrient_list = _(nutrients).map(function(v,k) {
  return {
    id: k,
    display: v.name + " " + "(" + v.unit + ")"
  };
});

var keys = ["name", "group", "id"].concat( _(nutrient_list).pluck("display") )

var rows = _(foods).map(function(v,id) {
  var name = v.name;
  var group = v.foodgroup;
  var nuts = {};
  _(v.nutrients).each(function(nut) {
    nuts[nut.id] = nut.amount;
  });
  var nuts_list = _(nutrient_list).map(function(nut) {
    return get(nuts, nut.id);
  });
  return [name,group,id].concat(nuts_list);
});

var csv = d3.csv.format([keys].concat(rows)).replace(/\n/g,"<br/>\n");


$('body').html(csv);
