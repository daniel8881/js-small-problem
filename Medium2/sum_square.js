

var sumSquareDiff = num => {
  var arr = [];
  for(var i = 1; i <= num; i++){
    arr.push(i);
  }

  var sum = 0,
      sum_of_square = 0;

  arr.forEach(item => {
    sum += item;
    sum_of_square += item * item;
  })

  return sum * sum - sum_of_square;
}

console.log(sumSquareDiff(3));