function positive(x) {
  return x > 0;
}

function triangle(a, b, c) {
  var sides = [a, b, c].sort(function(x, y) {
        return x - y;
      });

  if (sides.every(positive) && (sides[0] + sides[1] > sides[2])) {
    if (a === b && b === c ) {
      return 'equilateral';
    } else if ( a === b || a === c || b === c) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  } else {
    return 'invalid';
  }
}

console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 4, 5));
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));