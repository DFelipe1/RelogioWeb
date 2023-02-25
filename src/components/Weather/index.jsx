import { useState } from 'react';
import { api } from '../../service';

import './styles.css'

import Cloud from '../../assets/Cloud.svg';

import Icon from '../../assets/';

export function Weather() {


    const [ inputCity, setInputCity ] = useState('')
    const [ weathers, setWeathers ] = useState()

    const Apikey = import.meta.env.VITE_API_KEY


    async function getcity(city) {
        const data = await api(`https://api.openweathermap.org/data/2.5/weather?q=${city}&limit=1&appid=${Apikey}`)
        const result = data  ? {
            description: `${data.name}, ${data.sys.country}`,
            lat: data.coord.lat,
            lon: data.coord.lon,
        } : null;
        return result
    }


    async function getWeather(lat, lon){
        const lang = "pt_br"
        const units = "metric"
        const data = await api(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Apikey}&lang=${lang}&units=${units}`)
        const result = data  ? {
            description:  data.weather[0].description,
            icon: data.weather[0].icon,
            temperature: data.main.temp,
        } : null;

        return result

    }

    async function weather() {
      
        const city = await getcity(inputCity)
        const weather = await getWeather(city.lat, city.lon)

        setWeathers({city, weather})
   
    }

    async function handleFormWeather(e) {
        e.preventDefault()

        await weather()
        
        setInterval(async () => {
            await weather()
        }, 50000)
    }

    const time = new Date().getHours() < 18 ? 'day' : 'night'


    return (
        <div className={weathers ? 'weather active' : 'weather'}>
            <div className={`image ${time}`}>
                {/* <img id="weatherIcon" src={Cloud} alt=""/> */}
                
                {
                     weathers ?
                        Icon(weathers.weather.icon)
                        :
                        <img id="weatherIcon" src={Cloud} alt=""/>
                }
            </div>
            <div className="locale">
                <span id="city">{
                    weathers ?
                        `${weathers.city.description}°`
                        
                    :
                        ' '
                }</span>

                <span id="temp">{
                    weathers ?
                        weathers.weather.temperature
                    :
                        ''
                }</span>

                <p id="description">{
                    weathers ?
                        weathers.weather.description
                    :
                        ''
                }</p>
            </div>
            <form action="" id="localization" onSubmit={(e) => handleFormWeather(e)}>
                <input className="city" type="text" placeholder="Digite sua cidade" onChange={(e) => setInputCity(e.target.value)}/>
            </form>
        </div>
    )
}