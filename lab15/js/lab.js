// Kaz Harte 
// November 25th, 2024

const URL = "https://icanhazdadjoke.com/";
// create a button listener
$("#button").click(function(){
    // call ajax
    $.ajax(ajaxObj);
  })
  
  // setup ajax object
  const ajaxObj = {
    url: URL,
    type: "GET",
    dataType: "json",
    headers: {
      "Accept": "application/json"
    },
    success: ajaxSuccess,
    error: ajaxError
  }
  
  // create ajax success callback (named)
  function ajaxSuccess(data) {
    console.log("Data received:", data);
    const joke = data.joke;
  
    // put joke in output div
    $(".output").html(joke);
    
  }
  
  
  // create ajax error callback
  function ajaxError(request,error){
        console.log("Oops:", request, error);
  }
  