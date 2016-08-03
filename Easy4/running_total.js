
function running_total(array){
  
  var newArr = [];
  newArr.push(array[0]);
      
  for(var i = 1; i < array.length; i++){
    newArr.push(newArr[i - 1] + array[i]);
  }

  return newArr;
}

console.log(running_total([2, 5, 13]));
console.log(running_total([14, 11, 7, 15, 20]));
console.log(running_total([3]));
console.log(running_total([]));


function running_total2(array){
  
  var sum = 0;
  return array.map(function(value){
     return sum += value;
  });
}


console.log(running_total2([2, 5, 13]));
console.log(running_total2([14, 11, 7, 15, 20]));
console.log(running_total2([3]));
console.log(running_total2([]));

//solution 3
var runningTotal = arr => {
  var total = [];
  arr.reduce(function(acc, value){
    total.push(acc + value);
    return acc + value;
  }, 0)

  return total;
}
