function fibonacciLast(n) {
  if (n < 1 ) { return "unvalid input"; }
  if (n === 1 || n === 2) { return 1; }

  var i = 3,
      last_2 = [1, 1];

  for(i; i <= n; i++) {
    last_2 = [last_2[1] , (last_2[0] + last_2[1]) % 10];
    console.log(last_2);
  }
  return last_2[1];
}

console.log(fibonacciLast(20));