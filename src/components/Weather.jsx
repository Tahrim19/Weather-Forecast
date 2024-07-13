import React, { useEffect, useState } from 'react'
import axios from 'axios';
import WeatherDetail from './WeatherDetail';

export default function Weather() {
    const [city , setCity] = useState('');
    const[weatherData , setWeatherData] = useState(null)

    const fetchData = async() => {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=11342dd04adbd7f13c0076d225ba2800`);
            setWeatherData(response.data);
            console.log(response.data);
        }
        catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    } , []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };

    const handleInputChange = (e) => {
        setCity(e.target.value);
    }

  return (
    <div className='container'>
        <div className='icon-form'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='cloud-sun'>
        <path fill="#42b7d7" d="M294.2 1.2c5.1 2.1 8.7 6.7 9.6 12.1l14.1 84.7 84.7 14.1c5.4 .9 10 4.5 12.1 9.6s1.5 10.9-1.6 15.4l-38.5 55c-2.2-.1-4.4-.2-6.7-.2c-23.3 0-45.1 6.2-64 17.1l0-1.1c0-53-43-96-96-96s-96 43-96 96s43 96 96 96c8.1 0 15.9-1 23.4-2.9c-36.6 18.1-63.3 53.1-69.8 94.9l-24.4 17c-4.5 3.1-10.3 3.8-15.4 1.6s-8.7-6.7-9.6-12.1L98.1 317.9 13.4 303.8c-5.4-.9-10-4.5-12.1-9.6s-1.5-10.9 1.6-15.4L52.5 208 2.9 137.2c-3.2-4.5-3.8-10.3-1.6-15.4s6.7-8.7 12.1-9.6L98.1 98.1l14.1-84.7c.9-5.4 4.5-10 9.6-12.1s10.9-1.5 15.4 1.6L208 52.5 278.8 2.9c4.5-3.2 10.3-3.8 15.4-1.6zM144 208a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM639.9 431.9c0 44.2-35.8 80-80 80H288c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z"/></svg>        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Enter a city..'
                value={city}
                onChange={handleInputChange}
             />
             <button type="submit">Get Weather</button>
        </form>
        </div>
        {weatherData ? (
            <WeatherDetail weatherData={weatherData}/>
        ) : null}
    </div>
  )
}
