//Write a method that takes one argument
// a positive integer, and returns a list of the digits in the number.

function digiList(number){
  var arr = number.toString(10).split("").map(function(num){
    return parseInt(num);
  });

  return arr;
}

console.log(digiList(12345)); //[1,2,3,4,5]
console.log(digiList(7)); //[7]
console.log(digiList(375290)); //[3,7,5,2,9,0,]
console.log(digiList(444)); //[4,4,4]