function wordToDigit(sentence) {
  var number_map = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
      words = sentence.split(" "),
      number_length;

  words = words.map(function(word) {
    var alphanumerics = word.toLowerCase().replace(/[^a-z]/, "");

    if (number_map.indexOf(alphanumerics) !== -1) {
      return word.replace(alphanumerics, number_map.indexOf(alphanumerics));
    } else {
      return word;
    }
  });

 //how to remove the space between digits
 //find the digit and space follow up
 //use callback function to add them together and remove space

  function replacer(match, p1, p2, offset, string) {
    return (p1 + p2).replace(/\s+/,"");
  }

  words = words.join(" ").replace(/(\d)(\s)/g, replacer);
  return words;

  
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
