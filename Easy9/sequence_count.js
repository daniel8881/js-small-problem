

function sequence(count, number){
  var arr = new Array(count),
      counted = [];

  for(var i = 0; i < arr.length; i++){
    counted.push(number * (i + 1));
  }

  return counted;
}

console.log(sequence(5, 1));
console.log(sequence(4, -7));
console.log(sequence(3, 0));
console.log(sequence(0, 1000000));


//solution 2
var sequence = (count, num) => {

  var result = [];
  for(var i = 1; i <= count; i++){
    result.push(i * num);
  }

  return result;
}