// Kaz Harte 
// October 26th, 2024
colorStats = [
  {hitPoint: "5", STR: "4", WLLPWR: "2"},{hitPoint: "4", STR: "2", WLLPWR: "4"},
  {hitPoint: "2", STR: "1", WLLPWR: "6"}, {hitPoint: "4", STR: "6", WLLPWR: "1"},
  {hitPoint: "3", STR: "3", WLLPWR: "2"}, {hitPoint: "8", STR: "1", WLLPWR: "3"},
  {hitPoint: "2", STR: "6", WLLPWR: "4"}

]
//setting selectedColor var so the rest of the code can access it outside of event listener.

//to track wether or not colors are selected.
let selectedColor = null;
let selectedColor2 = null;
let test = null;
let test2 = null;

//color picker #1
var colorPicker = document.createElement("input");
  colorPicker.type = "color";
  colorPicker.className = "favcolor";

//adds color picker to sidecontent section
document.body.appendChild(colorPicker);
$('.sidecontent').append(colorPicker)

// Add an event listener for when the user selects a new color
  colorPicker.addEventListener("input", function(event) {
    // Get the selected color value from the event target (the <input> tag)
    var selectedColor = event.target.value;
    console.log("selectedColor", selectedColor);
    test = ClassSortHash(selectedColor);
    console.log("Test:", test);


    $("#sidecontent").html(test);

    $('.sidecontent2').html("<div><h1> <span style='color: "+ selectedColor + ";'</span>" + selectedColor + "</h1><h2>HitPoints: " + test.hitPoint + 
      "</h2><p> WillPower: " + test.WLLPWR + 
      "<br> Strength: " + test.STR + "</p></div>");
});


//color picker #2
var colorPicker2 = document.createElement("input");
  colorPicker2.type = "color";
  colorPicker2.className = "favcolor";

document.body.appendChild(colorPicker2);
$('.mainboxescontent').append(colorPicker2)
// Add an event listener for when the user selects a new color
    colorPicker2.addEventListener("input", function(event) {
    // Get the selected color value from the event target (the <input> tag)
    var selectedColor2 = event.target.value;
    console.log("selectedColor", selectedColor2);
    test2 = ClassSortHash(selectedColor2);
    console.log("Test2:", test2);

    $("#sidecontent").html(test2);
    

    $('.mainboxescontent2').html("<div><h1><span style='color: " + selectedColor2 + ";'</span>" + selectedColor2 + "</h1><h2>HitPoints: " + test2.hitPoint + 
      "</h2><p> WillPower: " + test2.WLLPWR + 
      "<br> Strength: " + test2.STR + "</p></div>");
});

 
//purpose of this was to make this ??? work when color was picked??? 
    //but need: once both colors are picked, make it possible to click fight button. 

    //figure this out then take the math assessment....

$("#button").click(function() {
  if (test && test2) {
      if (test2.STR > test.STR){
        test.hitPoint -= 1;
      } 
      else if (test2.STR < test.STR){
        test2.hitPoint -= 1;
      }
      else if (test2.STR === test.STR){
          if (test2.WILLPWR < test.WLLPWR){
            test2.hitPoint -= 1;
          }
          else if (test2.WLLPWR > test.WLLPWR){
            test.hitPoint -= 1;
          }
        }

        //create a new box where winner is announced. 
      if (test2.hitPoint <= 0) {
        $('.mainboxescontent2').html("<div><h1><span style='color: " + selectedColor2 + ";'</span>" + selectedColor2 + "</h1><h2>HitPoints: " + 0 + 
          "</h2><p> WillPower: " + test2.WLLPWR + 
          "<br> Strength: " + test2.STR + "</p></div>");
        $('#winbox').html("<div><h1>Winner is: " + selectedColor2 + "</h1></div>");
        //disable button
        $("#button").prop("disabled", true);
        //exit when game is over
        return;

      } else if (test.hitPoint <= 0) {
        $('.sidecontent2').html("<div><h1><span style='color: " + selectedColor2 + ";'</span>" + selectedColor2 + "</h1><h2>HitPoints: " + 0 + 
          "</h2><p> WillPower: " + test2.WLLPWR + 
          "<br> Strength: " + test2.STR + "</p></div>");
        $('#winbox').html("<div><h1>Winner is: " + selectedColor + "</h1></div>");

        $("#button").prop("disabled", true);
        return;
      }
    }

    //update
    $('.sidecontent2').html("<div><h1><span style='color: " + selectedColor + ";'>" + selectedColor + "</span></h1>" + 
      "<h2>HitPoints: " + test.hitPoint + "</h2><p> WillPower: " + test.WLLPWR + 
      "<br> Strength: " + test.STR + "</p></div>");

    $('.mainboxescontent2').html("<div><h1><span style='color: " + selectedColor2 + ";'>" + selectedColor2 + "</span></h1>" + 
       "<h2>HitPoints: " + test2.hitPoint + "</h2><p> WillPower: " + test2.WLLPWR + 
      "<br> Strength: " + test2.STR + "</p></div>");
    }
  
   );
//take string and return hashed checksum of the string
function checksum(str) {
  var hash = 0; 
    var strlen = str.length , i, c; 
  if ( strlen === 0 ) {
    return hash;
  }
  for ( i = 0; i < strlen; i++ ) {
    c = str.charCodeAt( i );
    hash = ((hash << 5) - hash) + c;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

function ClassSortHash(str) {
  checksumValue = checksum(str);
 
  //ClassSortHash always returns checksumValue
  console.log(checksumValue)
  mod = Math.abs(checksumValue) % colorStats.length;
  return colorStats[mod];      
  // returns an object from the array
}




