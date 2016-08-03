//Write a method that counts the number of occurrences of each element in a given array.


function count_occurrences(array) {
    var obj = {};

    array.forEach(function(item) {
        if (obj[item]) {
          obj[item]++;
        } else {
          obj[item] = 1;
        }
    });

    for (var prop in obj){
      console.log(prop + "=>" + obj[prop]);
    }

    
}

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];
console.log(count_occurrences(vehicles));

//solution 2
function count(arr){
  return arr.reduce(function(acc, value){
    if(acc[value]){
       acc[value]++;
    }else{
       acc[value] = 1;
    }

    return acc;
  }, {})
}