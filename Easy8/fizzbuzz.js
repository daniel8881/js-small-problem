
function fizzbuzz(start, end){
  
  for(var i = start; i <= end; i++){
    var string = "";
    if(i % 3 === 0 ){ string += 'Fizz';}
    if(i % 5 === 0 ){ string += 'Buzz';}
    console.log(string || i);
  }
}


fizzbuzz(1, 15);