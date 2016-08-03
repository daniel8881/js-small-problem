
function substring(text){
  var arr = [];
  for(var i = 0 ; i < text.length; i++){
    arr.push(text.slice(0, i + 1));
  }

  return arr;
}

console.log(substring('abc'));
console.log(substring('a'));
console.log(substring('xyzzy'));