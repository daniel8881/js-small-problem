function xor(x, y){
  //only one condition is true return true, otherwise return false
  return (x && !y) || ( !x && y );
}

console.log(xor(true, true));
console.log(xor(false, true));
console.log(xor(true, false));
console.log(xor(false, false));