//[3,5,2] = 3 + (3 + 5) + (3 + 5 + 2)
//3 * 3 + 5 * 2 + 2 * 1
//arr[i] * arr.length - i

function sumOfSums(array){
  var total = 0;

  for(var i = 0; i < array.length; i++){
    total += array[i] * (array.length - i);
    console.log(total);
  }

  return total;
}


console.log(sumOfSums([3,5,2]));
// console.log(sumOfSums([1,5,7,3]));
// console.log(sumOfSums([4]));
// console.log(sumOfSums([1,2,3,4,5]));