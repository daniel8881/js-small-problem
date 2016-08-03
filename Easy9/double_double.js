
function twice(number){

   if(isDouble(number)){
     return number;
   }else{
     return number * 2;
   }
}


function isDouble(number){
  var string = number.toString(),
      len = string.length;

  var left = string.slice(0, len / 2),
      right = string.slice(len / 2);

  return parseInt(left) === parseInt(right);
}


console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));