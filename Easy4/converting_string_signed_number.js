function string_to_signed_interger(string){
  var arr = string.split("");
  var sign = string.split("").shift();
  if(sign === "+" || sign === "-"){
    arr.shift();
  }

  var DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };

  var digis = arr.map(function(value){
    return DIGITS[value]; 
  });

  
  var total = 0;
  digis.forEach(function(value){
    total =  10 * total + value;
  });

  if(sign === "-"){
    return total * -1;
  }else{
    return total;
  }
} 


console.log(string_to_signed_interger("4321"));
console.log(string_to_signed_interger("-570"));
console.log(string_to_signed_interger("+100"));

