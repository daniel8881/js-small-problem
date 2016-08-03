
function reversedNumber(number){
  var num = number.toString().split("").reverse().join("");
  return parseInt(num);
}

console.log(reversedNumber(12345));
console.log(reversedNumber(12213));
console.log(reversedNumber(456));
console.log(reversedNumber(12000));
console.log(reversedNumber(1));