
const API_KEY = "9c235f641c9c89669e4f1db84de4b51b"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response  => response.json())
    .then(data => {
       const weather = document.querySelector("#weather span:first-child")
       const city = document.querySelector("#weather span:last-child")
       weather.innerText = `${data.weather[0].main} / ${data.main.temp}, `;
       city.innerText = data.name;
    });
}

function onGeoError(){
    document.getElementById("weather").innerHTML = '새로고침 후 위치 설정을 허가해 주세요!'
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)

