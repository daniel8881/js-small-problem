//Write a method that returns true if its integer argument is palindromic, 
//false otherwise. A palindromic number reads the same forwards and backwards.

function palindromic_number(number){
  var oldNum = number.toString();
  var newNum = oldNum.split("").reverse().join("");
  
  return oldNum === newNum ? true : false;
}

console.log(palindromic_number(34543));
console.log(palindromic_number(123210));
console.log(palindromic_number(22));
console.log(palindromic_number(5));
