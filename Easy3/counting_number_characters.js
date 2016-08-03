function counting(string){
  var s = string.replace(/\s/g, '');
  console.log("There are " + s.length + " in " + string);
}

counting("walk");
counting("walk, don't run");


//solution 2

var count = text => {
  var arr = text.split(" ").join("");
  return arr.length;
}