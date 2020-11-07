

function myWeather() {

var APIKey = "444df95bebbf2d383749e30c33a0d069";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=Chicago,NorthAmerica&appid=" + APIKey;
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=Nashville,NorthAmerica&appid=" + APIKey;
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {

    console.log(queryURL);

        // Log the resulting object
    console.log(response);

        // Transfer content to HTML
        $(".date").text("DATE: " + response.date);
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".feels-like").text("Real-Feel: " + response.main.feels_like);
        $(".uvi").text("UV Index: " + response.main.uvi);
    
      });

    console.log( queryURL + "\n---------------");
  console.log(queryURL + $.param(APIKey));
  return queryURL + $.param(APIKey);
}

        // $(".date").text("DATE: " + response.date);
        // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        // $(".wind").text("Wind Speed: " + response.wind.speed);
        // $(".humidity").text("Humidity: " + response.main.humidity);
        // $(".feels-like").text("Real-Feel: " + response.main.feels_like);
        // $(".uvi").text("UV Index: " + response.main.uvi);

   