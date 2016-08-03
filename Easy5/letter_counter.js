function wordSize(string){
  var arr = string.split(" ");
  var size = {};

  if (!string) { return {}; }

  arr.forEach(function(value){
    if(size[value.length]){
       size[value.length]++;
    }else{
       size[value.length] = 1;
    }
  });

  for(var prop in size){
    
    console.log(prop + "=>" +  size[prop]);
  }
}

//wordSize('Four score and seven.');
//wordSize('Hey diddle diddle, the cat and the fiddle!');
//wordSize("What's up doc?");
wordSize("");

//solution 2

var countLetter = text => {
  var arr = text.split(" ");
      
  return arr.reduce((acc, item) => {
    
    if(acc[item.length]){
      acc[item.length]++;
    }else{
      acc[item.length] = 1;
    }
    
   
    return acc;
  }, {})
}

console.log(countLetter('Hey diddle diddle, the cat and the fiddle!'));
