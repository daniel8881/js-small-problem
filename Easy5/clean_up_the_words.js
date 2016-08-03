function cleanWord(string) {

    return str.replace(/[^a-z]+/ig, " ").replace(/\s+/, " ");
}

 console.log(cleanWord("---what's my +*& line?") === ' what s my line ');

 //bad solution
 
var clean = text => {
  var rex = /[^a-z]/gi;
  return text.split(rex).filter(x => {
    return x.length !== 0;
  }).join(" ");

}
