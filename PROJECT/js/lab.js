// Kaz Harte 
// October 26th, 2024


const URL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

const URLstart = "https://deckofcardsapi.com/api/deck/";
const URLend = "/draw/?count=2";

//to track wether or not colors are selected.
let selectedColor = null;
let selectedColor2 = null;
let test = null;
let test2 = null;
let suitdrawn = null;
let suitdrawn2 = null;


function fetchSuitDrawn() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: URL,
      type: "GET",
      dataType: "json",
      headers: {
        "Accept": "application/json"
      },

    success: function(data) {
      //gets the deck id from first URL
      const deckID = data.deck_id;
        console.log("Deck ID:", deckID);
      //inserts deck id into draw url
      var realURL = URLstart + deckID + URLend;
        console.log("Draw URL: ", realURL);

      $.ajax({
        url: realURL,
        type: "GET",
        dataType: "json",
        headers: {
          "Accept": "application/json"
        },
    
      success: function(drawData) {
            var drawncards = drawData.cards;
              console.log("Drawn Cards:", drawncards);

            suitdrawn = drawncards[0].suit;
            suitdrawn2 = drawncards[1].suit;
              console.log("Drawn Suit's: ", suitdrawn, ", ", suitdrawn2);
            },

          error: function(request,error){
            console.log("Oh no: ", request, error);
            },
      });
    resolve();
    },


    error: function(xhr, status, error) {
      reject("Error shuffling deck: " + error);
    }
    //error: function(request,error){
      //console.log("Oh no: ", request, error);
      //},
    });
  });
}
//theDeckfunc


  
colorStats = [
  {hitPoint: "5", STR: "4", WLLPWR: "2"},{hitPoint: "4", STR: "2", WLLPWR: "4"},
  {hitPoint: "2", STR: "1", WLLPWR: "6"}, {hitPoint: "4", STR: "6", WLLPWR: "1"},
  {hitPoint: "3", STR: "3", WLLPWR: "2"}, {hitPoint: "8", STR: "1", WLLPWR: "3"},
  {hitPoint: "2", STR: "6", WLLPWR: "4"}, {hitPoint: "3", STR: "9", WLLPWR: "5"},
  {hitPoint: "5", STR: "1", WLLPWR: "8"}, {hitPoint: "7", STR: "5", WLLPWR: "2"},
  {hitPoint: "1", STR: "5", WLLPWR: "2"}, {hitPoint: "4", STR: "6", WLLPWR: "5"}
]
//setting selectedColor var so the rest of the code can access it outside of event listener.




//color picker #1
var colorPicker = document.createElement("input");
  colorPicker.type = "color";
  colorPicker.className = "favcolor";

//adds color picker to sidecontent section
document.body.appendChild(colorPicker);
$('.sidecontent').append(colorPicker);

// Add an event listener for when the user selects a new color
colorPicker.addEventListener("input", function(event) {
    // Get the selected color value from the event target (the <input> tag)
  selectedColor = event.target.value;
    console.log("selectedColor", selectedColor);
  test = ClassSortHash(selectedColor);
    console.log("Test:", test);


  $('.sidecontent2').html("<div><h1> <span style='color: "+ selectedColor + ";'</span>" + selectedColor + "</h1><h2>HitPoints: " + test.hitPoint + 
    "</h2><p> WillPower: " + test.WLLPWR + 
    "<br> Strength: " + test.STR + "</p></div>");
});


//color picker #2
var colorPicker2 = document.createElement("input");
  colorPicker2.type = "color";
  colorPicker2.className = "favcolor";

document.body.appendChild(colorPicker2);
$('.mainboxescontent').append(colorPicker2);

// Add an event listener for when the user selects a new color
colorPicker2.addEventListener("input", function(event) {
    // Get the selected color value from the event target (the <input> tag)
    selectedColor2 = event.target.value;
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

$(".button").click(async function() {
  try {

    await fetchSuitDrawn();
    //may still need to call ajax ??? 

  if (selectedColor && selectedColor2 && test && test2 && suitdrawn && suitdrawn2) {
    //this is where we will assign card values to colors. card 0 is for selectedColor. card 1 is for selectedColor2
    if (suitdrawn === "HEARTS") {
      $('#log').append("<div><p>" + selectedColor + " miraculously heals for 1 Hit Point. +1 to " + selectedColor + "'s HP.");
      test.hitPoint += 1;
    }
      else if (suitdrawn === "SPADES") {
        $('#log').append("<div><p>" + selectedColor + " downs some steroids. Permanent +1 to " + selectedColor + "'s strength.");
        test.STR += 1;
      }
        else if (suitdrawn === "CLUBS") {
          $('#log').append("<div><p>" + selectedColor + " is feeling especially inspired. Permanent +1 to " + selectedColor + "'s willpower.");
          test.WLLPWR += 1;
        }
          else if (suitdrawn === "DIAMONDS") {
            $('#log').append("<div><p>" + selectedColor + " is getting worked up. For this round " + selectedColor + " has +1 to it's attack.");
             // later -> if suitdrawn === DIAMONDS. 2 -= etc.
            }


    if (suitdrawn2 === "HEARTS") {
      $('#log').append("<div><p>" + selectedColor2 + " miraculously heals for 1 Hit Point. +1 to " + selectedColor2 + "'s HP.");
      test2.hitPoint += 1;
      }
      else if (suitdrawn2 === "SPADES") {
        $('#log').append("<div><p>" + selectedColor2 + " downs some steroids. Permanent +1 to " + selectedColor2 + "'s strength.");
        test2.STR += 1;
        }
        else if (suitdrawn2 === "CLUBS") {
          $('#log').append("<div><p>" + selectedColor2 + " is feeling especially inspired. Permanent +1 to " + selectedColor2 + "'s willpower.");
          test2.WLLPWR += 1;
          }
          else if (suitdrawn2 === "DIAMONDS") {
            $('#log').append("<div><p>" + selectedColor2 + " is getting worked up. For this round " + selectedColor2 + " has +1 to it's attack.");
            // later -> if suitdrawn === DIAMONDS. 2 -= etc.
            }
    
    //ensure two colors with the same stats are not competing.
  if (test === test2) {
    alert("Those colors are equally matched. Please select new colors.");
    return;
    } 

    //if color strength is equal, test willpower
  if (test2.STR === test.STR){
    if (test2.WLLPWR < test.WLLPWR){
      $('#log').append("<div><p>"+ selectedColor + " delt 1 damage to " + selectedColor2 + "</p></div>");
      test2.hitPoint -= 1;
      }

      else if (test2.WLLPWR > test.WLLPWR){
        $('#log').append("<div><p>"+ selectedColor2 + " delt 1 damage to " + selectedColor + "</p></div>");
        test.hitPoint -= 1;
        }} //ends will power testing.
    
    //strength testing.
  else if (test2.STR > test.STR){
    $('#log').append("<div><p>"+ selectedColor2 + " delt 1 damage to " + selectedColor + "</p></div>");
    test.hitPoint -= 1;
    } 

    else if (test2.STR < test.STR){
      $('#log').append("<div><p>"+ selectedColor + " delt 1 damage to " + selectedColor2 + "</p></div>");
      test2.hitPoint -= 1;
      }
      

    //if color 1 wins:
  if (test2.hitPoint <= 0) {
    $('.mainboxescontent2').html("<div><h1><span style='color: " + selectedColor2 + ";'</span>" + selectedColor2 + "</h1><h2>HitPoints: " + 0 + 
        "</h2><p> WillPower: " + test2.WLLPWR + 
        "<br> Strength: " + test2.STR + "</p></div>");
  
    $('#winbox').html("<div style='background-color:" + selectedColor + 
        ";'><h1>Winner is: <span style='text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; color: " + 
        selectedColor + ";'</span>" + 
        selectedColor + "!</h1>" + 
        "<img src='img/winner.gif'></div>");

      
    $("#button").prop("disabled", true);
    return; //exit game when over. 
    } //closes winner box for test 2.

    //if color 2 wins:
    else if (test.hitPoint <= 0) {
      $('.sidecontent2').html("<div><h1><span style='color: " + selectedColor + ";'</span>" + selectedColor + "</h1><h2>HitPoints: " + 0 + 
        "</h2><p> WillPower: " + test.WLLPWR + 
        "<br> Strength: " + test.STR + "</p></div>");
          
      $('#winbox').html("<div style='background-color:" + selectedColor2 + 
        ";'><h1>Winner is: <span style='text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; color: " + 
        selectedColor2 + ";'</span>" + 
        selectedColor2 + "!</h1>" + 
        "<img src='img/winner.gif'></div>");
        
      $("#button").prop("disabled", true);
        return;
      } //closes winner box for test.
    }// closes first if box. 

    //update
$('.sidecontent2').html("<div><h1><span style='color: " + selectedColor + ";'>" + selectedColor + "</span></h1>" + 
  "<h2>HitPoints: " + test.hitPoint + "</h2><p> WillPower: " + test.WLLPWR + 
  "<br> Strength: " + test.STR + "</p></div>");

$('.mainboxescontent2').html("<div><h1><span style='color: " + selectedColor2 + ";'>" + selectedColor2 + "</span></h1>" + 
  "<h2>HitPoints: " + test2.hitPoint + "</h2><p> WillPower: " + test2.WLLPWR + 
  "<br> Strength: " + test2.STR + "</p></div>");

  

  } 

  catch (error) {console.log("Error during game logic execution: ", error);}

}); //button bracket close.

//ensure the var from ajax is defined before senttt

//calculate color stats.
function checksum(str) {
  var hash = 0; 
  var strlen = str.length , i, c; 
    if ( strlen === 0 ) {return hash;}
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





