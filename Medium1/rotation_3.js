

var rotate = arr => {
  var result = arr.slice(1);
  result.push(arr[0]);
  return result;
}

var rotate2 = (num, digit) => {
  var arr = num.toString().split("");
  var result = arr.splice(arr.length - digit);
  var rotated = rotate(result);
  return +(arr.concat(rotated).join(""));
}

var rotate3 = num => {
  
  var len = num.toString().length,
      result = num;
  while(len > 0){
    result = rotate2(result, len);
    len--;
    console.log(result);
  }

  return result;
}

console.log(rotate3(735291));
