
function centerOf(text){

  var len = text.length,
      half = Math.floor(len / 2);
      

  if(len % 2 === 0){

    return text[half - 1] + text[half];

  }else if (len % 2 !== 0){

    return text[half];
  }

  
}

console.log(centerOf('I love ruby'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('Launchschool'));
console.log(centerOf('x'));