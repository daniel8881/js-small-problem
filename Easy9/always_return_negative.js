
function negative(number){
  if(number === 0) {
    return 0;
  }else {
    return Math.abs(number) * -1;
  }
  
}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));