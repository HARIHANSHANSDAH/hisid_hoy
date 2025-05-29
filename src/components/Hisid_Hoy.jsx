import React, { useEffect, useRef, useState } from 'react'
import './Hisid_Hoy.css'
import search_icon from '../assets/search.png'
import cleari from '../assets/clear.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import rain from '../assets/rain.png'
import snowi from '../assets/snow.png'
import wind from '../assets/wind.png'

const Hisid_Hoy = () => {

  const inputRef = useRef()

  const [hisidData, setHisidData] = useState(false);

  const allIcons={
    "01d" : cleari,
    "O1n" : cleari,
    "02d" : cleari,
    "02n" : cleari,
    "03d" : cleari,
    "03n" : cleari,
    "04d" : drizzle,
    "04n" : drizzle,
    "09d" : rain,
    "09n" : rain,
    "10d" : rain,
    "10n" : rain,
    "13d" : snowi,
    "13n" : snowi,

  }

  const search = async (city) => {
    if(city === ""){
      alert("Enter City Name");
      return;
    }
    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`       
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const icon = allIcons[data.weather[0].icon] || cleari;

        setHisidData({
          humidity : data.main.humidity,
          windSpeed: data.wind.speed,
          tempe: Math.floor(data.main.temp),
          loca: data.name,
          icon: icon
        })
      }catch (error){
        setHisidData(false);
        console.error("Error in fetching Data");
    }

  }
  useEffect(()=>{
    search("Jamshedpur")
  }, [])

  return (
    <div className='hisid_hoy'>
        <div className="search-bar">
          <input ref={inputRef} type="text" placeholder="Search" />
          <img src={search_icon} alt=""  onClick={()=>search(inputRef.current.value)}/>
        </div>
        {hisidData? <>
        <img src={hisidData.icon} alt="" className='hisid_icon'/>
        <p className='tem'>{hisidData.tempe}°C</p>
        <p className='loc'>{hisidData.loca}</p>
        <div className='hisid_data'>
          <div className='col'>
            <img src={humidity} alt="" />
            <div>
              <p>{hisidData.humidity}%</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className='col'>
            <img src={wind} alt="" />
            <div>
              <p>{hisidData.windSpeed} Kmph</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div></>:<></>}
        
    </div>
  )
}

export default Hisid_Hoy

