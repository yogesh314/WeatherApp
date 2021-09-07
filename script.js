let weather = {
    apikey: "c8c1b7cb96f213670f7645b628bf2405",
    fetchWeather: function(city){
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city
        +"&units=metric&appid="
        + this.apikey
    )
    .then((responce) => responce.json())
    .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".City").innerText = "Weather in " + name;
        document.querySelector(".Temp").innerText = temp + "°C";
        document.querySelector(".Icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".Description").innerText = description;
        document.querySelector(".Humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".Wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function(){
   weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter")
      weather.search();
});

weather.fetchWeather("Delhi")