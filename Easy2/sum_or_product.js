function calculate(num, option){
  var total;

  if(option === "s"){
    total = 0;
    for(var i = 0; i <= num; i++){
      total += i;
    }
  }else if(option === 'p'){
    total = 1;
    for(var i = 1; i <= num; i++){
      total *= i;
    }
  }
  
  return total;
}