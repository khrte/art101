// Kaz Harte 
// October 26th, 2024
colorStats = [
  {hitPoint: "5", STR: "4", WLLPWR: "2"},{hitPoint: "4", STR: "2", WLLPWR: "4"},
  {hitPoint: "2", STR: "1", WLLPWR: "6"}, {hitPoint: "4", STR: "6", WLLPWR: "1"},
  {hitPoint: "3", STR: "3", WLLPWR: "3"}, {hitPoint: "8", STR: "1", WLLPWR: "1"},
  {hitPoint: "2", STR: "6", WLLPWR: "6"}

]
//setting selectedColor var so the rest of the code can access it outside of event listener.

var colorPicker = document.createElement("input");
  colorPicker.type = "color";
  colorPicker.className = "favcolor";
 
document.body.appendChild(colorPicker);
$('.sidecontent').append(colorPicker)

// Add an event listener for when the user selects a new color
  colorPicker.addEventListener("input", function(event) {
    // Get the selected color value from the event target (the <input> tag)
    var selectedColor = event.target.value;
    console.log("selectedColor", selectedColor);
    test = ClassSortHash(selectedColor)
    console.log("Test:", test)
    $("#sidecontent").html(test);

    $('.sidecontent2').html("<div><h1> <span style='color: "+ selectedColor + ";'</span>" + selectedColor + "</h1><p>HitPoints: " + test.hitPoint + 
      "<br> WillPower: " + test.WLLPWR + 
      "<br> Strength: " + test.STR + "</p></div>");
});


// second instance of color picker
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
    test2 = ClassSortHash(selectedColor2)
    console.log("Test2:", test2)
    $("#sidecontent").html(test2);
    console.log("selectedColor2: ", selectedColor2)

    $('.mainboxescontent2').html("<div><h1><span style='color: " + selectedColor2 + ";'</span>" + selectedColor2 + "</h1><p>HitPoints: " + test2.hitPoint + 
      "<br> WillPower: " + test2.WLLPWR + 
      "<br> Strength: " + test2.STR + "</p></div>");
});
 
//purpose of this was to make this ??? work when color was picked??? 
    //but need: once both colors are picked, make it possible to click fight button. 

    //figure this out then take the math assessment....

    $("#button").click(function(){
      if (test2.STR > test.STR){
        test.hitPoint = test.hitPoint - 1;
      }

      else if (test2.STR < test.STR){
        test2.hitPoint = test2.hitPoint - 1;
      }

      else if (test2.STR == test.STR){
          if (test2.WILLPWR < test.WLLPWR){
            test2.hitPoint = test2.hitPoint - 1;
          }
          else if (test2.WLLPWR > test.WLLPWR){
            test.hitPoint = test.hitPoint - 1;
          }
        }
    }
)
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




//"<h1>" + "<p>You're a <span style='color: " + 
    //classObj.color + ";'>" + classObj.t + "</span>! </p>" + 
   // classObj.text + "</h1>" + "<img class=photo src='img/" + 
    //classObj.image + "'>" 