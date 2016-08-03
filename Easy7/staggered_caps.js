
function staggeredCase(text){
  
  var staggered = "",
      flag = true;
  for(var i = 0 ; i < text.length; i++){
    if(flag){
      staggered += text[i].toUpperCase();
    }else{
      staggered += text[i].toLowerCase();
    }

    flag = !flag;
  }

  return staggered;
}


console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 444 numbers'));

//solution 2

var stag = text => {

  var need_upper = true;
  var arr = text.split("");

  var stagged =  arr.reduce((acc, item) => {
    if(need_upper){
      acc.push(item.toUpperCase());
    }else{
      acc.push(item);
    }
    need_upper = !need_upper;
    return acc;
  }, []);

  return stagged.join("");
}