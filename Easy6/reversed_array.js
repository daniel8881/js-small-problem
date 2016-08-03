
var reverseArr = arr => {
  var start = 0;
  var end = arr.length - 1;
  var temp;
  

  for(var i = 0; i < Math.floor(arr.length / 2); i++){
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  } 

  return arr;
}

var arr1 = [1,2,3,4],
    arr2 = ["a", "b", "c", "d", "e"];
console.log(reverseArr(arr1));
console.log(reverseArr(arr2));