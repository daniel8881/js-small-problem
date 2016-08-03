

function average(array){
  var total = 1;
  for(var i = 0; i < array.length; i++){
    total *= array[i];
  }

  var average = (total / array.length).toFixed(3);

  console.log(average);
}


average([3,5]);
average([2, 5, 7, 11, 13, 17]);