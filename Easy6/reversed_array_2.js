
function reversedArray(arr){
  var newArr = [];

  for(var i = arr.length - 1 ; i >= 0; i--){
    newArr.push(arr[i]);
  }
  
  return  newArr;
}


var list = [1,2,3,4],
    list2 = ["a", "b", "c", "d", "e"];
console.log(reversedArray(list));
console.log(reversedArray(list2));


//solution 2
var reversed = arr => {
  var result = [];

  for(var i = 0; i < arr.length; i++){
    result[i] = arr[arr.length - 1 - i];
  }

  return result;
}