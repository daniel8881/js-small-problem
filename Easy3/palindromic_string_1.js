//Write a method that returns true if the 'madam' p;assed as an argument is a 
//palindrome, false otherwise. (A palindrome reads the same forwards and backwards.) 

//Case matters, and all characters should be considered.

var palindrome = text => {
  var new_text = text.split("").reverse().join("");
  return new_text === text;
}

console.log(palindrome('madam'));
console.log(palindrome('Madam'));
console.log(palindrome("madam i'm adam"));
console.log(palindrome('356653'));


