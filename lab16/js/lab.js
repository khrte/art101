// Kaz Harte 
// December 2nd, 2024
const URL = "https://api.nasa.gov/planetary/apod?api_key=RgNBs4TjYNVjwPSQLLvkMtIj4zOflKWVB3TikTry"

//so. obv fake url.
//modeling this off of other websites I've seen. 
//lets pretend real url is "https://api.nasa.gov/planetary/photo-1217.json"
                                                                            //or something. 
const URLstart = "https://api.nasa.gov/planetary/photo-";
const URLend = "/json";
 
//button to start function.
$("#button").click(function(){
    // call ajax
    $.ajax(comicObj);
  })

  const comicObj = {
// The URL for the request (from the api docs)
  url: URL,
  type: "GET",
  dataType: "json",
  headers: {
    "Accept": "application/json"
  },
  success: ajaxSuccess,
  error: ajaxError
}

//this function doesn't do anything and exists for the fake scenario where
//this api works just like the xkcd one.
    //pretend like nasa photos can be accessed by number.

function NasaPhotos(date) {
  if (typeof date === 'undefined') {
    numStr = "";
  } else {
    numStr = date.toString() + "/";
  }
  var realURL = URLstart + numStr + URLend;
  console.log(realURL);

  $.ajax({
      // The URL for the request (ENDPOINT)
      url: realURL,
      // Whether this is a POST or GET request
      type: "GET",
  })

}
    
  //API success
    function ajaxSuccess(data) {
      console.log("Data received:", data);
      var title = data.title;
      var img = data.url;
      //there is no option for alt in this API, here's how I would have done it though. 
        // var altt = data.alt;
        // $("#output").html("<h1>" + title + "</h1><img src='" + img + "' alt='" + alt "'>")
      var photoNum = data.date;
      console.log(photoNum)
      $("#output").html("<h1>" + title + "</h1><br><img class='oops' src='" + img + "' alt='No space pic today!'>"
        + "<div id=futurepast><button id=back>Prev Pic</button>  <button id=forward>Future Pic</button></div>"
      );
      
      // so theres no option to go back or forward on the image with this API, but again heres how I would have done it.
        //originally considered trying something with the date instead of photo num, however things got too messy when months and not just days were considered. 

      $("#back").click(function(){
        NasaPhotos(photoNum - 1);
      });
      // add event listener to new next button
      $("#forward").click(function(){
        NasaPhotos(photoNum + 1);
      });
    }
  

   // create ajax error callback
   function ajaxError(request,error){
    console.log("Oh no: ", request, error);
}


