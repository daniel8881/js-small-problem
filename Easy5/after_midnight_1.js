
function prefix(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return "" + number;
  }
}

function timeOfDay(time) {
  var hour = 0,
      minute = 0;

  if (time === 0) { return "00:00"; }

  hour = Math.floor(Math.abs(time) / 60) % 24;
  minute = Math.abs(time) % 60;

  if (time > 0) {
    return prefix(hour) + ":" + prefix(minute);
  } else if (time < 0) {
    return prefix(23 - hour) + ":" + prefix(60 - minute);
  }
}


console.log(timeOfDay(0));
console.log(timeOfDay(3));
console.log(timeOfDay(1440));
