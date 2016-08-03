
function search(target){
  var arr = Array.prototype.slice.call(arguments);
  arr.shift();

  if(arr.indexOf(target) !== -1 ){
    console.log("The number " + target + " appears in " + arr);
  }else{
    console.log("The number " + target + " does not appears in " + arr);
  }
  console.log(arr);
}



function search(){
  var arg = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
  return arg.indexOf(arguments[arguments.length - 1]) > -1;

}