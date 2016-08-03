function average(array){
  var total = 0;
  array.forEach(function(item){
    total += item;
  });

  return Math.floor(total / array.length);
}