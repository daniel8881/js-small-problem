
function merge(array1, array2){

  var newArr = array1.concat(array2);
  var uniqle = [];

  newArr.forEach(function(item){
    if(uniqle.indexOf(item) === -1){
      uniqle.push(item);
    }
  });

  return uniqle;
}

console.log(merge([1,3,5], [3,6,9]));