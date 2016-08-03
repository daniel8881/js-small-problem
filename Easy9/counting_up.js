
function sequence(number){
  var arr = [];
  for(var i = 1; i <= number; i++){
    arr.push(i);
  }
  return arr;
}


console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));