//Build a program that displays 
//when the user will retire and how many years she has to work till retirement.

function retire(age, retireAge){
  var year = new Date().getFullYear();
  var retireYear = year + (retireAge - age);
  console.log("It's " + year + " You will retire in " + retireYear);
  console.log("You have only" + (retireAge - age) +" year of work to go!");
}