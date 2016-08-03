
function multiplyPair(arr1, arr2){

  var value= [];

  for(var i = 0 ; i < arr1.length; i++){

    for(var l= 0 ; l < arr2.length; l++){

      value.push(arr1[i] * arr2[l]);
    }
  }

  value.sort(function(a,b){
    return a - b;
  });

  return value;

}

console.log(multiplyPair([2, 4], [4, 3, 1, 2]));