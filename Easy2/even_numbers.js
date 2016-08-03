//Print the even numbers from 1 to 99, inclusive. 
//All numbers should be printed on separate lines.

function evenNumber(min, max){
  for(var i = min; i < max; i++){
    if(i % 2 === 0){
      console.log(i);
    }
  }
}