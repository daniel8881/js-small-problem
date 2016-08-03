//Write a method that takes two arguments, a string and a positive integer,
// and prints the string as many times as the integer indicates.
function repeat(string, times){
  for(var i = 0; i < times; i++){
    console.log(string);
  }
}

console.log(repeat("Hello", 3));