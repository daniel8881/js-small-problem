function findLongestSentence(text) {
  var sentences = text.split(/\.|\?|!/);
  sentences.forEach(function(item){
    console.log(item.length);
  });
}

findLongestSentence('I am one. you are a son. fuck you all the way.');

