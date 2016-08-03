
function letterSwap(string){
  var arr = string.split(" ");
  

  var newArr = [];
  arr.forEach(function(value){
    newArr.push(value.split("").reverse().join(""));
  });

  return newArr.join(" ");
}

console.log(letterSwap('Oh what a wonderful day it is'));
console.log(letterSwap('Abcde'));
console.log(letterSwap('a'));
