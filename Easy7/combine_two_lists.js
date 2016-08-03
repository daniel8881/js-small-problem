
function interleave(arr1, arr2){
  
  var newArr = [];
  for (var i = 0; i < arr1.length; i++){
    newArr.push(arr1[i]);
    newArr.push(arr2[i]);
  }

  return newArr.toString();
}

console.log(interleave([1,2,3], ["a","b","c"]));