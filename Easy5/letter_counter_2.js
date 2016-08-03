function wordSize(string){
  var arr = string.split(" ");
 
  var newArr = arr.map(function(value){
    return value.replace(/\W/g, "");
  });

 
  
  var size = {};

  if (!string) { return {}; }

  newArr.forEach(function(value){
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

//wordSize("What's up doc?");
//wordSize('Four score and seven.');
wordSize('Hey diddle diddle, the cat and the fiddle!');
