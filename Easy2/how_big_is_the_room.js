function area(length, width){
  var squareMeter = (length * width).toFixed(1),
      squareFeet = (squareMeter * 10.7639).toFixed(2);

      console.log("The area of the room is " + squareMeter + "(" + squareFeet + " square feet).");
}