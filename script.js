function weatherData() {
    let cityName = document.getElementById("cityName").value;
    let weatherIcon = document.getElementById("weatherIcon");

    fetch(`https://api.weatherapi.com/v1/current.json?key=33d111d46f9643febc691613262601&q=${cityName}`).then(function (res) {
        return res.json()
    }).then(function (response) {
        weatherIcon.innerHTML = `<img src="https:${response.current.condition.icon}" alt="weather icon">`
        let temp_c = response.current.temp_c;
        document.getElementById("temp_c").innerText = `${temp_c}°C`
        let text = response.current.condition.text;
        document.getElementById("text").innerText = `(${text})`
        let city = response.location.name;
        document.getElementById("city").innerText = `City:  ${city}`;
        let region = response.location.region;
        document.getElementById("region").innerText = `Region: ${region}`;
        let country = response.location.country;
        document.getElementById("country").innerText = `Country: ${country}`;
        let fahrenheit_f = response.current.temp_f;
        document.getElementById("fahrenheit_f").innerText = `Fahrenheit:${fahrenheit_f} °F`;
        let feelslike_c = response.current.feelslike_c;
        document.getElementById("feelslike_c").innerText = `Feelslike:${feelslike_c} °C`;
        let humidity = response.current.humidity;
        document.getElementById("humidity").innerText = `Humidity:${humidity}%`;
        let visibility = response.current.vis_km;
        document.getElementById("visibility").innerText = `Visibility:${visibility}km`;
        let wind_speed = response.current.wind_kph;
        document.getElementById("wind_speed").innerText = `Wind Speed:${wind_speed}kp/h`;
    }).catch((error) => {
        console.log("Err", error)
    })

}
