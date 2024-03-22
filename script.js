const apikey = "a578e9e3b25ffbe5dee1c0634bdaf281";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=banglore";

async function checkWeather(){
    const response = await fetch(apiURL+`&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
}
checkWeather();