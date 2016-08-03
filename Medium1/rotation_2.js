function rotate(array){
  var newArr = array.slice(0);
  newArr.shift();
  newArr.push(array[0]);
  return newArr;
}

function rotateNumber(num, digit){
  var arr = num.toString().split(""),
      len = arr.length - digit;
      start = arr.slice(0, len),
      rotated = rotate(arr.slice(-digit));
      
  return start.concat(rotated).join("");

  
}

console.log(rotateNumber(735291, 1));
console.log(rotateNumber(735291, 2));
console.log(rotateNumber(735291, 3));
console.log(rotateNumber(735291, 4));
console.log(rotateNumber(735291, 5));
console.log(rotateNumber(735291, 6));
