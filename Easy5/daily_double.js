function doubleWord(string){
  return string.replace( /(.)(?=\1)/gi, "");
}

console.log(doubleWord('ddaaiillyy ddoouubbllee'));
console.log(doubleWord('4444abcabccba'));
console.log(doubleWord('ggggggggggggggg'));
console.log(doubleWord('a'));
console.log(doubleWord(''));