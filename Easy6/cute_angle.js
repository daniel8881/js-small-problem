function prefix(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}

function angle(number) {
  var degree,
      minutes,
      secounds;


  degree = Math.floor(number);
  minutes = Math.floor((number - degree) * 60);
  secounds = Math.floor((((number - degree) * 60) - minutes) * 60);

  return degree + "°" + prefix(minutes) + "'" + prefix(secounds) + '"';
}

console.log(angle(30));
console.log(angle(76.73));
console.log(angle(254.6));
console.log(angle(93.034773));
console.log(angle(0));
console.log(angle(360));
