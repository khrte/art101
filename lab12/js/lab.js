// Kaz Harte 
// November 14th, 2024

classArrays = [
  {title: "Warlock", text: "Your power comes from a deal with an ungodly being."},
  {title: "Cleric", text: "Your power has been endowed to you by something divine."},
  {title: "Fighter", text: "Weak in terms of the arcane, but physically strong!"},
  {title: "Wizard", text: "Nerd lol."}
]

var colors = ["#ab4be3", "#edc96d", "#c91a29", "#2336b8"]

function buttSort(str){
  //getting length of string input
  len = str.length; 
  //I worry this is incorrect
  //get remainder with 4
  mod = len % 4; 
  if (mod == 0) 
    {return "Warlock"}

  else if (mod == 1) 
    {return "Cleric"}

  else if (mod == 2) 
    {return "Fighter"}

  else if (mod == 3) 
    {return "Wizard"}

  }
//js code does not use elif. Did not recognize it. 

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

introHTML = '<div>Your class is: '

function hasClass(ele,cls) {return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));}
function addClass(ele,cls) {if (!hasClass(ele,cls)) ele.className += " "+cls;}
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}


function ClassSortHash(str) {
  checksumValue = checksum(str);
  mod = Math.abs(checksumValue) % classArrays.length;
  return classArrays[mod];      
  // returns an object from the array
}


var myInput = document.getElementById("input");
myInput.addEventListener("focus", function() {
  addClass(document.getElementById("output"), "hidden");
  addClass(document.getElementById("tail-box"), "hidden");
});

// Function to get color based on index
function getColorForClass(classArrays) {
  // Calculate a hash value (index) based on string length.
  const hash = classArrays.length;
  // Use modulo operation to ensure it loops within bounds of 'colors' array
  const colorIndex = hash % colors.length;
  // Return color at calculated index
  return colors[colorIndex];
}

// Iterate over classes and assign span with dynamic coloring.
for (let i=0; i<classArrays.length; i++) {
var cheese = classArrays[i];
}
var gust = document.getElementById("input").value;
  // use name to get house from SortingHat function
  var classObj = ClassSortHash(gust);

$("#button").click(function(){
  var name = $("#input").val()
  var dndclass = buttSort(name);
  $("#output").html("<h1>" + "<p>You're a <span style='color: " + getColorForClass(gust) + ";'>" + dndclass + "</span>! </p>" + classObj.text + "</h1>");
})




// loop code
// increases i each time. console log prints it over and over.
// i++ increments by one. 
for(let i = 0; i<5; i++) {
console.log("hi for the " + (i + 1) + "th time.") 