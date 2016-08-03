function stringy(num){
  var arr = [];
  for(var i = 0; i < num; i++){
    return i%2 === 0 ? arr.push(1) : arr.push(0);
  }
  return arr.join("");
}


console.log(stringy(6)); //101010
console.log(stringy(9)); //101010101
console.log(stringy(4)); //1010
console.log(stringy(7)); //1010101

