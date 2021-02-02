
  var search =[]

function myWeather() {


var city = $("#search-term").val();
search.push(city)

var APIKey = "444df95bebbf2d383749e30c33a0d069";

    
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city +
    "&appid="+ APIKey +"&units=imperial"
  
  $.ajax({
    url: queryURL,
    method: "GET",
  })
  .then(function (response) {
    $.ajax({
      url:
        "http://api.openweathermap.org/data/2.5/uvi?lat=" +
        response.coord.lat +
        "&lon=" +
        response.coord.lon +
        "&appid=" +
        APIKey,
      method: "GET",
    }).then(function (res) {
      console.log("uv search", res.value);
      $(".uvi").text("UV Index: " + res.value);

      var indexUvi = ("uv search", res.value);
      console.log(indexUvi);

      if (indexUvi < 2.0) {
        $(".uvi").addClass("fav");
      } else if (indexUvi > 6.0) {
        $(".uvi").addClass("sev");
      } else $(".uvi").addClass("mod");
    });

    console.log(response);

    // $(".date").text("DATE: " + response.date);
    $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".feels-like").text("Real-Feel: " + response.main.feels_like);
  });

  forecast(city);
}

function forecast(city) {
  console.log(city);
  APIKey = "444df95bebbf2d383749e30c33a0d069";

  $.ajax({
    url:
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=" +
      APIKey +
      "&units=imperial",
    type: "GET",
  }).then(function (forecastData) {
    console.log(forecastData);
    for (var i = 0; i < 5; i++) {
      var column = $("<div>").addClass("col-md-2");
      var card = $("<div>").addClass("card");
      var cardBod = $("<div>").addClass("card-body");
      var date = $("<h6>")
        .addClass("card-title")
        .text(forecastData.list[i].dt_txt.slice(5, 10));
      var title = $("<p>").text("Hourly Forecast");
      var temp = $("<p>").text("Temperature:" + forecastData.list[i].main.temp);
      var humid = $("<p>").text(
        "Humidity:" + forecastData.list[i].main.humidity);
      var date = $("<p>").text("Date" + forecastData.list[i].dt_txt.slice(5, 10));
      

      $("#dayForecast").append(
        column.append(card.append(cardBod.append(title, date, temp, humid)))
      );
    }
  });
}
