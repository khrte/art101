// Kaz Harte 
// October 29th, 2024


// Variables

function TheFunctionEver(x) {return (x + 2);}

// testing function!
console.log("2 + 2 = ", TheFunctionEver(2))
console.log("63 + 2 = ", TheFunctionEver(63))

// defined array
array = [55, 42, 100, 78]
  console.log("This is what my array looks like: ", array);


// Adding to whole Array
var MapResults = array.map(TheFunctionEver);

  console.log("The array if they were two values higher: ", MapResults);


// subtracting actually. 
var MapResults = array.map(function(x){return x - 6;})

  console.log("Subtraction results: ", MapResults);
