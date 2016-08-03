function asciiValue(string){
  var total = 0;
  for(var i = 0 ; i < string.length; i++){
    total += string.charCodeAt(i);
  }

  return total;
}

console.log(asciiValue('Four score'));
console.log(asciiValue('Launch School'));
console.log(asciiValue('a'));
console.log(asciiValue(''));


//solution 2
var asciivalue = text => {
  return text.split("").reduce((acc, item) => {
    return acc + item.charCodeAt(0);
  }, 0)
}
