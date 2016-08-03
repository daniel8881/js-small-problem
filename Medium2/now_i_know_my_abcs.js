//233 2

function converter(string){
  var stack = [],
      i = string.length - 1;
  while(i >= 0){
    stack.push(string[i] * Math.pow(8, i));
    i--;
  }

  return parseInt(stack.join(""));
}

console.log(converter('4095'));