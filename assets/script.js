//when button is clicked, the searched term is put in the fetch request 
function citySearch() {
    var searchTerm = document.querySelector("#searchTerm").value;
    // console.log(searchTerm)

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=107bb383ee91eb004de630bb7cda7b17&units=imperial")
    .then(function(response){
        // console.log(response);
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        asidefunction(data);
        cityToday(data);
        cityTempStatus(data);
        cityHumidityStatus(data);
        cityWindStatus(data);
        cityUVStatus(data);
    })
}

function asidefunction(data) {
    var name = (data.name);
        // creates button to place city name
        var cityBtn = document.createElement("button");
        // changes text inside button to city name
        cityBtn.innerHTML = (data.name)
        //attaches button to city list and creates a variable
        var newCity = document.getElementById("citySideBar").appendChild(cityBtn);
        // this adds a class list to the new button, so the CSS style can be added
        newCity.classList.add("searchedCity");
}

function cityToday(data) {
    var name = (data.name);
        // select element by ID
        var cityName = document.getElementById("cityName")
        // changes innerHTML of city name
        cityName.innerHTML = name
        // select element
}

function cityTempStatus(data) {
    var temp = (data.main.temp);
    var cityTemp = document.getElementById("cityTemp");
    cityTemp.innerHTML = "Tempurature " + temp + "° F";
}

function cityHumidityStatus(data) {
    var hum = (data.main.humidity);
    var cityHum = document.getElementById("cityHum");
    cityHum.innerHTML = "Humidity:  " + hum + "%";
}

function cityWindStatus(data) {
    var wind = (data.wind.speed);
    var cityWind = document.getElementById("cityWind");
    cityWind.innerHTML = "Wind Speed: " + wind + " MPH";
}

// function cityUVStatus(data) {
//     var UVlon = (data.coord.lon);
//     var UVlat = (data.coord.lat);
//     var UV = (UVlon + UVlat)
//     // var cityHum = document.getElementById("cityTemp");
//     // cityTemp.innerHTML = "Tempurature " + temp + "° F";
//     console.log(UVlon);
//     console.log(UVlat);
// }

function cityUVStatus(data) {
    var UVlon = (data.coord.lon);
    var UVlat = (data.coord.lat);

    fetch("https://api.openweathermap.org/data/2.5/uvi?q=&appid=107bb383ee91eb004de630bb7cda7b17&lat=" + UVlat + "&lon=" + UVlon)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        var UV = (data.value);
        console.log(UVlon , UVlat);
        console.log(UV);
        var cityUV = document.getElementById("cityUV");
        cityUV.innerHTML = "UV Index: " + UV;
        if (UV <= 2) {
        cityUV.classList.add("lowUV");
        } else if (UV > 2 || UV <= 7) {
        cityUV.classList.add("moderateUV");
    }
        else (UV > 7) ;{
        cityUV.classList.add("highUV");
        }
    })
    
}