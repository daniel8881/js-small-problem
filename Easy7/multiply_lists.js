
function multiplyList(arr1, arr2){
  var product = [],
      len = arr1.length;

  for(var i = 0; i < len; i++){
    product.push(arr1[i] * arr2[i]);
  }

  return  product;
}


console.log(multiplyList([3,5,7], [9,10,11]));