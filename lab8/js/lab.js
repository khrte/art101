// Kaz Harte 
// October 26th, 2024


// Variables
var MyMainRide = {
  make: "Mercedes",
  model: "Convertible",
  color: "black",
  year: 2000,
  age: function() { 
    return 2024 - this.year;
      }
}

var MyTransport = [ 
  'bus', 'car', 'bike', 'walk'
  ] 




  // output
  document.writeln(
    "Yeah, I get around in my " + MyTransport[1] + ". Its a " + MyMainRide.color + " " + MyMainRide.make + "<br>"
  );

  document.writeln("My Main Ride: <pre>",
    JSON.stringify(MyMainRide, null, '\t'), "/<pre>"
  );

  console.log("Yeah I get around in my " + MyTransport[1] + ". Its a " + MyMainRide.color + " " + MyMainRide.make)