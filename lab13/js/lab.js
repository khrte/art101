// Kaz Harte 
// November 18th, 2024



var x = prompt("Enter the Lower Number:");
var y = prompt("Enter the Higher Number:");


//One way to do this is to compile one long string as you output numbers. Something like: 

function FizzBuzz(x, y){
  var OneLongString = "";
    for (var i = x; i<y+1; i++){
      if (i % 3 == 0) {
        OneLongString += i + ". Fizz!<br>";
      }
      else if (i % 5 == 0) { 
        OneLongString += i + ". Buzz!<br>";
      }
      else if (i % 7 == 0) {
        OneLongString += i + ". Boom!<br>";
      }
      else {OneLongString  += i + ".<br>"; }
  
      
  } 
  return OneLongString
}

$("#output").html(FizzBuzz(parseInt(x), parseInt(y)));

//$("#output").html(FizzBuzz);

