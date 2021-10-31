import './App.css';
import { useState } from 'react';

function Weather() {
	const API_KEY = 'cd09d8ac9a0ef1574b474e68f204b38a';

	const [zipCodeWeather, setZipCodeWeather] = useState({
		city: '',
		temp: '',
		humidity: '',
		weather: '',
		description: '',
	});
	const [zipCode, setZipCode] = useState('');
	// const [country, setCountry] =useState('')

	const [countryCode, setCountryCode] = useState('');

	const handleCountryCode = (e) => {
		e.preventDefault();
		setCountryCode(e.target.value);
	};

	const handleZipCode = (e) => {
		e.preventDefault();
		setZipCode(e.target.value);
	};
	// const handleCountry = (e) => {
	// 	e.preventDefault();
	// 	setCountry(e.target.value);
	// };

	const weatherInfo = (e) => {
		e.preventDefault();
		fetch(
			'http://api.openweathermap.org/data/2.5/weather?q=' +
				zipCode +
				countryCode +
				'&units=imperial&appid=' +
				API_KEY
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setZipCodeWeather({
					city: data.name,
					temp: data.main.temp,
					humidity: data.main.humidity,
					weather: data.weather[0].main,
					description: data.weather[0].description,
				});
			});
		console.log(zipCodeWeather);
	};

	if (zipCodeWeather.humidity === '') {
		return (
			<div className='App'>
				<h1 className='head'> Weather Forecast </h1>
				<form className='form' onSubmit={weatherInfo}>
					<input
						className='zipCode'
						onChange={handleZipCode}
						type='text'
						value={zipCode}
						name='zipCode'
						placeholder='Enter a ZipCode'
					/>
					<input
						className='country'
						onChange={handleCountryCode}
						type='text'
						value={countryCode}
						name='country'
						placeholder='Enter Country Code'
					/>

					<button id='button' className='btn btn-primary'>
						{' '}
						Search{' '}
					</button>
				</form>
			</div>
		);
	} else {
		return (
			<div className='forecast'>
				<h1 className='forecastInput'> Weather Forecast </h1>
				<form className='form' onSubmit={weatherInfo}>
					<input
						className='city'
						onChange={handleZipCode}
						type='text'
						value={zipCode}
						name='city'
						placeholder='Enter a City'
					/>
					<input
						className='country'
						onChange={handleCountryCode}
						type='text'
						value={countryCode}
						name='country'
						placeholder='Enter Country Code'
					/>

					<button id='button' className='btn btn-primary'>
						{' '}
						Search{' '}
					</button>
				</form>
				<div>
					<h1 className='city'> {zipCodeWeather.city} </h1>
					<h2 className='temperature'> {zipCodeWeather.temp} </h2>
					<h2 className='humidity'> {zipCodeWeather.humidity}% </h2>
					<h2 className='weather'> {zipCodeWeather.weather} </h2>
					<h2 className='description'> {zipCodeWeather.description} </h2>
				</div>
			</div>
		);
	}
}

export default Weather;
