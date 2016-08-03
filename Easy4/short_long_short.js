//Write a method that takes two strings as arguments, determines the longest 
//of the two strings, and then returns the result of concatenating the shorter 
//string, the longer string, and the shorter string once again. You may assume 
//that the strings are of different lengths.

function shortLong(string1, string2 ){
  
  if(string1.length > string2.length){
    return string2 + string1 + string2;
  }else{
    return string1 + string2 + string1;
  }
}

console.log(shortLong('abc', 'defgh'));
console.log(shortLong('abcde', 'fgh'));
console.log(shortLong('', 'xyz'));