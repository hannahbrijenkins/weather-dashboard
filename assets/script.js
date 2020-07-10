// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=107bb383ee91eb004de630bb7cda7b17&units=imperial

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
    })
}