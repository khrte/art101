// Kaz Harte 
// November 12th, 2024

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// sorts user characters in alphabetical order
$("#submit").click(function(){
  // declare variable and get value out of users input
  const userName = $("#user-name").val();
  // sort the users name into alphabetical order using past function
  userNameSorted = sortString(userName);
  // output new name + create new div for userNameSorted.
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});





