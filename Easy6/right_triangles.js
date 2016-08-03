function triangle(number) {
    var stars;

    for (var i = 1; i <= number; i++) {
        //plus one for array join
        stars = Array(number - i + 1).join(" ") + Array(i + 1).join("*");
        console.log(stars);
    }
}


console.log(triangle(5));


function invertedTriangle(number){
  var stars;

  for(var i=0; i < number; i++){
    stars = Array(i + 1).join(" ") + Array(number - i + 1).join("*");
    console.log(stars);
  }
}


console.log(invertedTriangle(5));