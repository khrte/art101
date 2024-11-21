// Kaz Harte 
// November 18th, 2024


// asks the user for function parameters
var x = prompt("Enter the Lower Number:");
var y = prompt("Enter the Higher Number:");


//function with loops thru parameters and outputs num and fizz/buzz/boom
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

//makes sure it actually shows up on the website. 
$("#output").html(FizzBuzz(parseInt(x), parseInt(y)));



