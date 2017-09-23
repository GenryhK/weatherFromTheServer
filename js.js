function gifAdd(weather) {
	let img = document.createElement(`img`);
	img.setAttribute(`src`, `giphy.gif`);
	document.body.appendChild(img);
	return weather
}



let button = document.createElement(`button`);
button.textContent = `get weather`;

function func() {
	fetch(`http://api.openweathermap.org/data/2.5/find?q=Kharkov&type=like&APPID=14bf1ba5d4f8aae8bae214d5bc0281b4`).then(respons => {
		let weather = respons.json();
		return weather
	}, error => {
		alert(`error`)
	}).then(weather => gifAdd(weather)).then(weather => setTimeout(function() {
		document.body.removeChild(document.querySelector(`IMG`));

		let div = document.createElement(`div`);
		div.textContent = `weather in the: ${weather.list[0].name}`;
		document.body.appendChild(div);
		let pPressure = document.createElement(`p`);
		pPressure.textContent = `Pressure:${weather.list[0].main.pressure}`;
		div.appendChild(pPressure);

		let weatherDescription = document.createElement(`p`);
		weatherDescription.textContent = `Weather description: ${weather.list[0].weather[0].description}`;
		div.appendChild(weatherDescription);

		let pHumidity = document.createElement(`p`);
		pHumidity.textContent = `Humidity:${weather.list[0].main.humidity}`;
		div.appendChild(pHumidity);

		let pTempMax = document.createElement(`p`);
		pTempMax.textContent = `Temp: ${weather.list[0].main.temp}`;
		div.appendChild(pTempMax);


		let pWindSpeed = document.createElement(`p`);
		pWindSpeed.textContent = `Wind speed: ${weather.list[0].wind.speed}m/s`;
		div.appendChild(pWindSpeed);
	//	console.log(weather.list[0].main.temp_max);
	//	console.log(weather);


		button.removeEventListener(`click`, func);

		function func2() {
			document.body.removeChild(div);
			let img = document.createElement(`img`);
			img.setAttribute(`src`, `giphy.gif`);
			func()
		}

		button.addEventListener(`click`, func2);
	}, 5000))
};
button.addEventListener(`click`, func);
document.body.appendChild(button);



/*fetch(`http://api.openweathermap.org/data/2.5/find?q=Kharkov&type=like&APPID=14bf1ba5d4f8aae8bae214d5bc0281b4`).then(respons=>{let weather=respons.json();return weather}
,error=>{alert(`error`)}).then(weather=>setTimeout(function(){alert(weather)},5000))



console.log(weather.list[0])

*/