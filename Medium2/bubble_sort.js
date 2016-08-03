
var swap = (arr,idx1, idx2) => {
  var aux = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = aux;
  return arr;
}


var bubbleSort = arr => {
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length - 1 - i; j++){
      if(arr[j] > arr[j + 1]){
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

console.log(bubbleSort([6,2,7,1,4]));