
function wordLength(text){
  var arr = text.split(" ");
  var newArr = arr.map(function(item){
    return item + " " + item.length;
  });

  if(!text){
    return [];
  }

  return newArr;
}


console.log(wordLength("cow sheep chicken"));
console.log(wordLength("baseball hot dogs and apple pie"));
console.log(wordLength("It ain't easy, is it?"));
console.log(wordLength("Supercalifragilisticexpialidocious"));
console.log(wordLength(""));
