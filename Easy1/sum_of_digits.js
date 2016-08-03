function sum(number) {
    var arr = number.toString().split("");
    var newArr =  arr.map(Number);
    return newArr.reduce(function(a,b){
      return a + b;
    });  
}

console.log(sum(23));  //5
console.log(sum(496));  //19



function sum(number){
  var total = 0,
      numbers = number.toString().split("");

  numbers.forEach(function(item){
    total += +item;
  });

  return total;
}
