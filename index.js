const secondaryColor = "#ffffff";
const primaryColor = "#0d2b26";

// Function to be called when the button is clicked
function handleButtonClick() {
  var url = $("#url-value").val();

  fetch(url.toString())
    .then((response) => {
      // Check if the request was successful (status code 200)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parse the response as JSON (assuming it's a JSON response)
      return response.json();
    })
    .then((data) => {
      // Log the parsed data to the console
      var readableData = JSON.stringify(data, null, 2);
      console.log(readableData);
      $(".response-text").html(
        '<pre id="formatted-text">' + readableData + "</pre>"
      );

      // console.log(data);
      // $('.response-text').text(data);
    })
    .catch((error) => {
      // Handle errors
      console.error("There was a problem with the fetch operation:", error);
    });
}

$("#copy-btn").on("click", function () {

  setTimeout(() => {
    $(".tooltip-text").css("visibility", "visible");
  }, 200);

  setTimeout(() => {
    $(".tooltip-text").css("visibility", "hidden");
    
  }, 700);
});

$("#copy-btn").on("mouseenter", function () {
  $("#copy-btn").css("background-color", primaryColor);
  $("#copy-btn").css("color", secondaryColor);
});

$("#copy-btn").on("mouseleave", function () {
  $("#copy-btn").css("background-color", secondaryColor);
  $("#copy-btn").css("color", primaryColor);
});

//   https://api.themoviedb.org/3/movie/now_playing?api_key=cc9bcce557575cd9094bd4040409d484&language=en-US&page=1
