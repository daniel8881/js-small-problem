//the sum of all angles is 180
//all angles greater than 0

function positive(x) {
  return x > 0;
}

function right(x){
  return x === 90;
}

function acute(x){
  return x < 90;
}

function obtuse(x){
  return x > 90;
}

var triangle = (x,y,z) => {
  
  var sides = [x,y,z];
  var sum = sides.reduce((acc, item) => {return acc + item;});
  
  if(sides.every(positive) && sum === 180 ){
    if(sides.some(right)){
      return  'right';
    }else if(sides.every(acute)){
      return  'acute';
    }else if(sides.some(obtuse)){
      return 'obtuse'
    }
  }else{
    return  'invalid';
  }
}



console.log(triangle(50, 50, 50));
