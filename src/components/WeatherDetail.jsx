import React from 'react'

export default function WeatherDetail({weatherData}) {
  return (
    <div className='data'>
        <h3>{weatherData.name}</h3>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Description: {weatherData.weather[0].description}</p>
        <p>Feels Like: {weatherData.main.feels_like}°C</p>
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Wind Speed: {weatherData.wind.speed}m/s</p>
    </div>
  )
}
