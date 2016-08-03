
function letterCaseCount(string){
  var lowercase = string.replace(/[^a-z]/g, "").length;
  var uppercase = string.replace(/[^A-Z]/g, "").length;
  var neither = string.length - lowercase - uppercase;

  return o = {
    lowercase: lowercase,
    uppercase: uppercase,
    neither: neither
  };
}


console.log(letterCaseCount("abCdef 123"));
console.log(letterCaseCount("AbCd +Ef"));
console.log(letterCaseCount("123"));
console.log(letterCaseCount(""));

//solution 2

var letterCaseCount = text => {
  var o = {};
  o.lowercase = 0;
  o.uppercase = 0;
  o.neither = 0;

  for(var i = 0; i < text.length; i++){
    if(text.charAt(i).match(/[a-z]/g)){
      o.lowercase++;
    }else if(text.charAt(i).match(/[A-Z]/g)){
      o.uppercase++;
    }else{
      o.neither++;
    }
  }

  return o;
}
