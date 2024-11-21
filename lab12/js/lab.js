// Kaz Harte 
// November 14th, 2024

//Lists all possible result classes
classArrays = [
  {title: "Warlock", text: "Your power comes from a deal with an ungodly being.", color: "#ab4be3", image:"enza.jpeg"},
  {title: "Cleric", text: "Your power has been endowed to you by something divine.", color: "#edc96d", image:"saelos.jpeg"},
  {title: "Fighter", text: "Weak in terms of the arcane, but physically strong!", color: "#c91a29", image:"veargeel.jpeg"
  }, {title: "Wizard", text: "Nerd lol.", color: "#2336b8", image:"zalah.jpeg"}
]



//take string and return hashed checksum of the string
function checksum(s) {
  var hash = 0, strlen = s.length, i, c;
  if ( strlen === 0 ) {
    return hash;
  }
  for ( i = 0; i < strlen; i++ ) {
    c = s.charCodeAt( i );
    hash = ((hash << 5) - hash) + c;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

function ClassSortHash(str) {
  checksumValue = checksum(str);
  //looks like this is just dividing  checksumvalue by class array length, which is always 4. 
  //ClassSortHash always returns checksumValue
  mod = Math.abs(checksumValue) % classArrays.length;
  return classArrays[mod];      
  // returns an object from the array
}



$("#button").click(function(){
  var name = $("#input").val()
  var classObj = ClassSortHash(name)

  //output.
  $("#output").html("<h1>" + "<p>You're a <span style='color: " + 
    classObj.color + ";'>" + classObj.title + "</span>! </p>" + 
    classObj.text + "</h1>" + "<img class=photo src='img/" + 
    classObj.image + "'>" );
})



