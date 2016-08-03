function calTip(bill, tip){
  var tips = bill * tip / 100;
  console.log("The tip is " + tips);
  console.log("The total is " + (bill + tips));
}

console.log(calTip(200,15));