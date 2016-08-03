
function greetings(array, obj){
  var name = array.join(" "),
      title = obj.title + " " + obj.occupation;

  console.log("Hello, " + name + " Nice to have a " + title + " around");

}


console.log(greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' }));