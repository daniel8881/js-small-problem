function toggleLight(n) {
  var lights = [],
      on = [],
      i = 1,
      j = 1;

  for (i; i <= n + 1; i++) {
    lights.push(false);
  }
  

  for (i = 1; i <= n; i++) {
    for (j = i; j <= n; j += i) {
      lights[j] = !lights[j];
    }
  }

  on = lights.map(function(light, idx) {
    if (light) { return idx; }
  });

  on = on.filter(function(light) {
    return light;
  });

  return on;
}

function lightInfo(on) {
  var message = "There are ";

  message += on.length + " lights are left on, ligths are "
  on.forEach(function(num, idx) {
    if (idx === on.length - 1) {
      message += ", and " + num;
    } else if (idx === 0) {
      message += num;
    } else {
      message += ", " + num;
    }
  });

  return message;
}

console.log(toggleLight(5));
//console.log(lightInfo(toggleLight(5)));
//console.log(lightInfo(toggleLight(10)));
//console.log(lightInfo(toggleLight(1000)));