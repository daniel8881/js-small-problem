function string_to_interger(string){
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

  var digis = string.split("").map(function(value){
    return DIGITS[value]; 
  });

  

  var total = 0;
  digis.forEach(function(value){
    total =  10 * total + value; //important
    console.log(total);
  });

  return total;
}

console.log(string_to_interger('4321'));
console.log(string_to_interger('570'));


function hexadecial_to_interger(hex){
  var HEX = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
  };

  var digis = hex.toUpperCase().split("").map(function(value){
    return HEX[value]; 
  });


  var total = 0;
  digis.forEach(function(value){
    total =  16 * total + value;
  });

  return total;

}

console.log(hexadecial_to_interger("11"));