//Write another method that returns true if the string passed as an argument is a palindrome, 
//false otherwise. This time, however, your method should be case-insensitive, and it should 
//ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the 
//palindrome? method you wrote in the previous exercise.

var real_palindromic = text => {
  var new_text = text.toLowerCase().match(/[a-z0-9]/gi);
  return new_text.join("") === new_text.reverse().join("");
}

console.log(real_palindromic('madam'));
console.log(real_palindromic('Madam'));
console.log(real_palindromic("Madam, I'm Adam"));
console.log(real_palindromic('356653'));
console.log(real_palindromic('356a653'));
console.log(real_palindromic('123ab321'));