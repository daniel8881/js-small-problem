
function fibonacciNumber(n){
  var arr = [1,1],
      index,
      number = Math.pow(10, n - 1) - 1;
     

  for(var i = 2; i < number; i++){
    arr[i] = arr[i - 1] + arr[i - 2];
    
    if(arr[i] > number){
       
      return i + 1;
    }
    
  }

  
}



console.log(fibonacciNumber(100));