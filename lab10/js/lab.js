
// Kaz Harte 
// October 26th, 2024


function generateRandomText() {
  const text = "A young man stands in his bedroom. It just so happens that today, the 13th of April, 2009, is this young man's birthday.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the HS text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random HS-like text
    return text.slice(randStart, randStart + randLen);
}

let leftSide = true;
// button makes text squirm around. 
$("#make-convo").click(function(){

  const newText = generateRandomText();
  // Prints text
    $("#beans").append('<div class="text"><p>' + newText + '</p></div>');

  // uses function to mix text
  $(".text").each(function(){
    $(this).addClass(leftSide ? "left" : "right");
  })

  leftSide = !leftSide;
  
});






