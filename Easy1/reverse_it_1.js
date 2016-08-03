//Write a method that takes one argument, a string, and returns the same 
//string with the words in reverse order.



function reverse_sentence(string){
  return string.split(" ").reverse().join(" ");
}

console.log(reverse_sentence('') === ''); //true
console.log(reverse_sentence('Hello World') === 'World Hello');//true
console.log(reverse_sentence('Reverse these words') === 'words these Reverse' );//true

