function substring(text) {
    var arr = [];
    for (var i = 0; i < text.length; i++) {
        arr.push(text.slice(0, i + 1));
    }

    return arr;
}

function allSubstring(text) {

    var arr = [];

    for (var i = 0; i < text.length; i++) {
        for (var l = 0; l < text.length; l++) {
            if(text.slice(i, l+1)){
              arr.push(text.slice(i, l + 1));
            }
            
        }
    }

    return arr;
}

console.log(allSubstring('abcde'));


//solution 2


var sString = word => {
  var result = [];
  for(var i = 1; i <= word.length; i++){
    result.push(word.substring(0, i));
  } 
  return result;
}

//console.log(sString('xyzzy'));


var ssString = word => {
  var result = [],
      len = word.length;
      
     
  for(var i = 0; i <= len; i++){
    result = result.concat(sString(word.slice(i)));
  }

  return result;
}

console.log(ssString('abcde'));