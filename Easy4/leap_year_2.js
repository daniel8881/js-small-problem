function leapYear(year){
  if(year < 1752 && year % 4 ===0){
    return true;
  }else {
    return year % 400 === 0  || (year % 4 === 0  && year % 100 !==0);
  }

  return false;
  
}

console.log(leapYear(2016));
console.log(leapYear(2015));
console.log(leapYear(2100));
console.log(leapYear(2400));
console.log(leapYear(240000));
console.log(leapYear(240001));
console.log(leapYear(2000));
console.log(leapYear(1900));
console.log(leapYear(1752));
console.log(leapYear(1700));
console.log(leapYear(1));
console.log(leapYear(100));
console.log(leapYear(400));
