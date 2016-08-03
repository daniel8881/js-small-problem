function bannerizer(string){

  var top_bottom = "+",
      side = "|",
      length = string.length + 2;

  for(var i = 0; i < length; i++){
    top_bottom += "-";
    side += " ";
  }

  top_bottom += "+";
  side += "|";

  console.log(top_bottom);
  console.log(side);
  console.log("| " + string + " |");
  console.log(side);
  console.log(top_bottom);
    
}

bannerizer("");