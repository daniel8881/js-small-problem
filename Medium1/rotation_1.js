function rotate(array){
  var newArr = array.slice(0);
  newArr.shift();
  newArr.push(array[0]);
  return newArr;
}


console.log(rotate([7, 3, 5, 2, 9, 1]));
console.log(rotate(['a', 'b', 'c']));
console.log(rotate(["a"]));
var x = [1,2,3,4];
console.log(rotate(x));
console.log(x);