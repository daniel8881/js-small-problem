function calculate_bonus(salary, bonus){
  return bonus ? (salary / 2) : 0;
}

console.log(calculate_bonus(2800, true));  //1400
console.log(calculate_bonus(1000, false)); //0
console.log(calculate_bonus(50000, true)); //25000s