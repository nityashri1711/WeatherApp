
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'APIKEY',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
.then(response=>response.json())
.then((response)=>{


    console.log(response)

    cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
})
.catch(err=>console.error(error));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value)
})
getWeather("Kolkata")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
.then(response=>response.json())
.then((response)=>{


    console.log(response)

    cloud_pctD.innerHTML = response.cloud_pct
    tempD.innerHTML = response.temp
    feels_likeD.innerHTML = response.feels_like
    humidityD.innerHTML = response.humidity
    min_tempD.innerHTML = response.min_temp
    max_tempD.innerHTML = response.max_temp
    wind_speedD.innerHTML = response.wind_speed
    wind_degreesD.innerHTML = response.wind_degrees
    sunriseD.innerHTML = response.sunrise
    sunsetD.innerHTML = response.sunset
})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
.then(response=>response.json())
.then((response)=>{


    console.log(response)

    cloud_pctL.innerHTML = response.cloud_pct
    tempL.innerHTML = response.temp
    feels_likeL.innerHTML = response.feels_like
    humidityL.innerHTML = response.humidity
    min_tempL.innerHTML = response.min_temp
    max_tempL.innerHTML = response.max_temp
    wind_speedL.innerHTML = response.wind_speed
    wind_degreesL.innerHTML = response.wind_degrees
    sunriseL.innerHTML = response.sunrise
    sunsetL.innerHTML = response.sunset
})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shimla', options)
.then(response=>response.json())
.then((response)=>{


    console.log(response)

    cloud_pctK.innerHTML = response.cloud_pct
    tempK.innerHTML = response.temp
    feels_likeK.innerHTML = response.feels_like
    humidityK.innerHTML = response.humidity
    min_tempK.innerHTML = response.min_temp
    max_tempK.innerHTML = response.max_temp
    wind_speedK.innerHTML = response.wind_speed
    wind_degreesK.innerHTML = response.wind_degrees
    sunriseK.innerHTML = response.sunrise
    sunsetK.innerHTML = response.sunset
})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jaipur', options)
.then(response=>response.json())
.then((response)=>{


    console.log(response)

    cloud_pctJ.innerHTML = response.cloud_pct
    tempJ.innerHTML = response.temp
    feels_likeJ.innerHTML = response.feels_like
    humidityJ.innerHTML = response.humidity
    min_tempJ.innerHTML = response.min_temp
    max_tempJ.innerHTML = response.max_temp
    wind_speedJ.innerHTML = response.wind_speed
    wind_degreesJ.innerHTML = response.wind_degrees
    sunriseJ.innerHTML = response.sunrise
    sunsetJ.innerHTML = response.sunset
})
