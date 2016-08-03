
function deleteVowels(array){

  var newArr = array.map(function(item){
    return item.replace(/[aeiou]/gi, "");
  });

  console.log(newArr);
}


deleteVowels(["abcdefghijklmnopqrstuvwxyz"]);
deleteVowels(["green", "YELLOW", "black", "white"]);
deleteVowels(["ABC", "AEIOU", "XYZ"]);