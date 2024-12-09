// Kaz Harte 
// November 4th, 2024

//Challenge
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

$("#button-challenge").click(function(){
  $("#challenge").toggleClass("special");
})

//Problems
$("#problems").append("<button id='button-problem'>Make Special</button>");

$("#button-problem").click(function(){
  $("#problems").toggleClass("special");
  //toggleClass color=selectedColor
})

//Reflection
$("#reflection").append("<button id='button-reflection'>Make Special</button>");

$("#button-reflection").click(function(){
  $("#reflection").toggleClass("special");
})

// Task X (Bonus)
// use the same code and just figure out a way to ensure the button knows what section to toggle. 

$(".special-section").each(function(index){
  let $button = $("<button>Make Special</button>");

  $button.click(function() {
    $(this).parent().toggleClass("special");
  })

  $(this).append($button);
}); 




