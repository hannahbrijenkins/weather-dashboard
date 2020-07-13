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
        getForecast(data);
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
        cityUV.innerHTML = UV;
        if (UV <= 2) {
        cityUV.classList.add("lowUV");
        } 
        else if (UV > 2 && UV <= 7) {
        cityUV.classList.add("moderateUV");
        }
        else {
        cityUV.classList.add("highUV");
        }
    })
    
}

function getForecast(data) {
    var name = (data.name);
    
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + name + "&appid=107bb383ee91eb004de630bb7cda7b17&units=imperial")
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        getDateOne(data);
        getDateTwo(data)
        getDateThree(data)
        getDateFour(data)
        getDateFive(data)
})}

function getDateOne(data) {
    var forDate = (data.list[6].dt_txt);
    var forIcon = (data.list[6].weather[0].icon);
    var forTemp = (data.list[6].main.temp);
    var forHum = (data.list[6].main.humidity);
    console.log(forTemp);
    // get element by ID
    var forecastDate = document.getElementById("forecastDateOne");
    var forecastIcon = document.getElementById("forecastIconOne");
    var forecastTemp = document.getElementById("forecastTempOne");
    var forecastHum = document.getElementById("forecastHumOne");
    // changes innerHTML of city name
    forecastDate.innerHTML = forDate;
    forecastIcon.src = "http://openweathermap.org/img/w/" + forIcon + ".png";
    forecastTemp.innerHTML = "Tempurature " + forTemp + "° F";
    forecastHum.innerHTML = "Humidity:  " + forHum + "%";

}

function getDateTwo(data) {
    var forDate = (data.list[12].dt_txt);
    var forIcon = (data.list[12].weather[0].icon)
    var forTemp = (data.list[12].main.temp)
    var forHum = (data.list[12].main.humidity);
    console.log(forDate);
    // get element by ID
    var forecastDate = document.getElementById("forecastDateTwo");
    var forecastIcon = document.getElementById("forecastIconTwo");
    var forecastTemp = document.getElementById("forecastTempTwo");
    var forecastHum = document.getElementById("forecastHumTwo");
    // changes innerHTML of city name
    forecastDate.innerHTML = forDate;
    forecastIcon.src = "http://openweathermap.org/img/w/" + forIcon + ".png";
    forecastTemp.innerHTML = "Tempurature " + forTemp + "° F";
    forecastHum.innerHTML = "Humidity:  " + forHum + "%";
}

function getDateThree(data) {
    var forDate = (data.list[14].dt_txt);
    var forIcon = (data.list[14].weather[0].icon)
    var forTemp = (data.list[14].main.temp)
    var forHum = (data.list[14].main.humidity);
    console.log(forDate);
    // get element by ID
    var forecastDate = document.getElementById("forecastDateThree");
    var forecastIcon = document.getElementById("forecastIconThree");
    var forecastTemp = document.getElementById("forecastTempThree");
    var forecastHum = document.getElementById("forecastHumThree");
    // changes innerHTML of city name
    forecastDate.innerHTML = forDate;
    forecastIcon.src = "http://openweathermap.org/img/w/" + forIcon + ".png";
    forecastTemp.innerHTML = "Tempurature " + forTemp + "° F";
    forecastHum.innerHTML = "Humidity:  " + forHum + "%";
}

function getDateFour(data) {
    var forDate = (data.list[18].dt_txt);
    var forIcon = (data.list[18].weather[0].icon)
    var forTemp = (data.list[18].main.temp)
    var forHum = (data.list[18].main.humidity);
    console.log(forDate);
    // get element by ID
    var forecastDate = document.getElementById("forecastDateFour");
    var forecastIcon = document.getElementById("forecastIconFour");
    var forecastTemp = document.getElementById("forecastTempFour");
    var forecastHum = document.getElementById("forecastHumThree");
    // changes innerHTML of city name
    forecastDate.innerHTML = forDate;
    forecastIcon.src = "http://openweathermap.org/img/w/" + forIcon + ".png";
    forecastTemp.innerHTML = "Tempurature " + forTemp + "° F";
    forecastHum.innerHTML = "Humidity:  " + forHum + "%";
}

function getDateFive(data) {
    var forDate = (data.list[30].dt_txt);
    var forIcon = (data.list[30].weather[0].icon)
    var forTemp = (data.list[30].main.temp)
    var forHum = (data.list[30].main.humidity);
    console.log(forDate);
    // get element by ID
    var forecastDate = document.getElementById("forecastDateFive");
    var forecastIcon = document.getElementById("forecastIconFive");
    var forecastTemp = document.getElementById("forecastTempFive");
    var forecastHum = document.getElementById("forecastHumThree");
    // changes innerHTML of city name
    forecastDate.innerHTML = forDate;
    forecastIcon.src = "http://openweathermap.org/img/w/" + forIcon + ".png";
    forecastTemp.innerHTML = "Tempurature " + forTemp + "° F";
    forecastHum.innerHTML = "Humidity:  " + forHum + "%";
}