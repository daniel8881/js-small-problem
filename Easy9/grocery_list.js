
function buyFruit(array){
  var fruit = [];

  array.forEach(function(item) {
    for (var i = 0; i < item[1]; i++) {
      fruit.push(item[0]);
    }
  });

  return fruit;
}

console.log(buyFruit([["apples", 3], ["orange", 1], ["bananas", 2]]));