import './App.css';
import { useState } from 'react';
import cloudImg from './icons/cloudImg.png'


function Weather() {
	const API_KEY = 'cd09d8ac9a0ef1574b474e68f204b38a';

	const [zipCodeWeather, setZipCodeWeather] = useState({
		city: '',
		temp: '',
		id: '',
		date: '',
		weather: '',
		description: '',
	});
	const [zipCode, setZipCode] = useState('');

	const handleZipCode = (e) => {
		e.preventDefault();
		setZipCode(e.target.value);
	};
	
	const weatherInfo = (e) => {
		e.preventDefault();
		fetch(
			'http://api.openweathermap.org/data/2.5/forecast?zip=' + zipCode + '&units=imperial&appid=' + API_KEY
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setZipCodeWeather({
					city: data.city.name,

					date: data.list[2].dt_txt,
					id: data.list[2].weather[0].id,
					temp: data.list[2].main.temp,
					weather: data.list[2].weather[0].description,

					date2: data.list[10].dt_txt,
					id2: data.list[10].weather[0].id,
					temp2: data.list[10].main.temp,
					weather2: data.list[10].weather[0].description,

					date3: data.list[18].dt_txt,
					id3: data.list[18].weather[0].id,
					temp3: data.list[18].main.temp,
					weather3: data.list[18].weather[0].description,

					date4: data.list[26].dt_txt,
					id4: data.list[26].weather[0].id,
					temp4: data.list[26].main.temp,
					weather4: data.list[26].weather[0].description,

					date5: data.list[34].dt_txt,
					id5: data.list[34].weather[0].id,
					temp5: data.list[34].main.temp,
					weather5: data.list[34].weather[0].description,
				});
		console.log(zipCodeWeather);
		})
	} 


		return (
			<div className='WeatherComponent'>
				<div className='FormForecast'>
					<h1 className='title'> Check Your Forecast... </h1>
					<form className='form' onSubmit={weatherInfo}>
						<input
							className='zipCode'
							onChange={handleZipCode}
							type='text'
							value={zipCode}
							name='city'
							placeholder='Enter a ZipCode'
						/>
						<button id='weatherButton' className='btn btn-primary'>
							{' '}
							Search{' '}
						</button>
					</form>
				</div>
				<div className='ForecastDisplay'>
					<h1 className='titleForecast'> Weather Forecast </h1>
					<h1 className='titleForecast'>
						{' '}
						Forecast for... {zipCodeWeather.city}{' '}
					</h1>
					<div className='displayDay' id={zipCodeWeather.id}>
						<img src={cloudImg} alt='cloud' id='cloudImg' />
						<h1 className='date'> {zipCodeWeather.date} </h1>
						<h2 className='temperature'> {zipCodeWeather.temp} </h2>
						<h2 className='weather'> {zipCodeWeather.weather} </h2>
					</div>
					<div className='displayDay' id={zipCodeWeather.id2}>
						<img src={cloudImg} alt='cloud' id='cloudImg' />
						<h1 className='date'> {zipCodeWeather.date2} </h1>
						<h2 className='temperature'> {zipCodeWeather.temp2} </h2>
						<h2 className='weather'> {zipCodeWeather.weather2} </h2>
					</div>
					<div className='displayDay' id={zipCodeWeather.id3}>
						<img src={cloudImg} alt='cloud' id='cloudImg' />
						<h1 className='date'> {zipCodeWeather.date3} </h1>
						<h2 className='temperature'> {zipCodeWeather.temp3} </h2>
						<h2 className='weather'> {zipCodeWeather.weather3} </h2>
					</div>
					<div className='displayDay' id={zipCodeWeather.id4}>
						<img src={cloudImg} alt='cloud' id='cloudImg' />
						<h1 className='date'> {zipCodeWeather.date4} </h1>
						<h2 className='temperature'> {zipCodeWeather.temp4} </h2>
						<h2 className='weather'> {zipCodeWeather.weather4} </h2>
					</div>
					<div className='displayDay' id={zipCodeWeather.id5}>
						<img src={cloudImg} alt='cloud' id='cloudImg' />
						<h1 className='date'> {zipCodeWeather.date5} </h1>
						<h2 className='temperature'> {zipCodeWeather.temp5} </h2>
						<h2 className='weather'> {zipCodeWeather.weather5} </h2>
					</div>
				</div>
			</div>
		);
}

export default Weather;