
function wordCap(string){
  return string.replace(/(^|\s)[a-z]/g, function(f){
    return f.toUpperCase();
  });
}

console.log(wordCap("four score and seven"));
console.log(wordCap("the javaScript language"));
console.log(wordCap("this is a 'quoted' word"));