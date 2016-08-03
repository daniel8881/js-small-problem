
function fridayThirteen(year) {
  var friday_thirteen = 0,
      month = 0,
      date;

  for (month; month < 12; month++) {
    date = new Date(year, month, 13);
    if (date.getDay() === 5) { friday_thirteen++; }
  }

  return friday_thirteen;
}

console.log(fridayThirteen(2015));
console.log(fridayThirteen(1986));