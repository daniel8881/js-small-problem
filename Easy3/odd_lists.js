//Write a method that returns an Array that contains every other 
//element of an Array that is passed in as an argument. The values in 
//the returned list should be those values that are in the 1st, 3rd, 
//5th, and so on elements of the argument Array.

function oddities(array){
  var newArr = [];
  for(var i = 0; i < array.length; i+=2 ){
    newArr.push(array[i]);
  }
  return newArr;
}

console.log(oddities([2, 3, 4, 5, 6]));
console.log(oddities(['abc', 'def']));

//solution 2

function oddList(arr){
  return arr.filter(function(x, i){
    return i % 2 === 0;
  })
}