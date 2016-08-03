//Build a program that randomly generates and prints Teddy's age. To get the age,
// you should generate a random number between 20 and 200.

function randomAge(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Teddy is " + randomAge(20, 200) + " years old!");