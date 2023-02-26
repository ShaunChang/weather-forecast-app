import { useState, useEffect, createContext } from "react"
import styled from "styled-components"
import {Outlet} from "react-router-dom"
import Current from "../components/Current/Current"
import Nav from "../components/Nav/Nav"
import { getCurrentWeather } from "../service/weatherService"

const AppContainer = styled.div`
    height: 100vh;
    box-sizing: border-box;
`
const ForecastContainer = styled.div`
    width: 90%;
    height: 60%;
    margin: 0 auto;
`
export const RootContext = createContext({
    changeSearchValue: ()=>{},
    changeLocation: ()=>{},
    currentWeather: {}
})

export default function Root (){
    const [currentWeather,setCurrentWeather ] = useState({
        location: '',
        localitme: '',
        temperature: '',
        icon: '',
        text:'',
        wind_kph: '',
        pm2_5: '',
        humidity: '',
        uv: '',
        forecastArray: [],
        twelveHoursForecastArray:[]
    });
    const [location,setLocation] = useState("beijing")
    const [searchValue,setSearchValue] = useState("")
    const [day, setDay] = useState(7)

    useEffect(()=>{
        getCurrentWeather(location,day).then(
            (res)=>{
                const weatherData = res.data;
                console.log(weatherData)
                setCurrentWeather({
                    location: weatherData.location.name,
                    localitme: weatherData.location.localtime,
                    temperature: weatherData.current.temp_c,
                    icon: weatherData.current.condition.icon,
                    text: weatherData.current.condition.text,
                    wind_kph: weatherData.current.wind_kph,
                    pm2_5: weatherData.current.air_quality.pm2_5.toFixed(2),
                    humidity:  weatherData.current.humidity,
                    uv: weatherData.current.uv,
                    forecastArray: weatherData.forecast.forecastday,
                    twelveHoursForecastArray: weatherData.forecast.forecastday[0].hour.slice(0,12)
                });
            }
        )
    },[location,day])

    const changeSearchValue = (e)=>{
        setSearchValue(e.target.value)
    }

    const changeLocation = ()=>{
        setLocation(searchValue)
    }

    return(
        <RootContext.Provider value={{
            changeSearchValue: changeSearchValue,
            changeLocation: changeLocation,
            currentWeather: currentWeather,
        }}>
            <AppContainer>
                <Current/>
                <ForecastContainer>
                    <Nav/>
                    <Outlet/>
                </ForecastContainer>
            </AppContainer>
        </RootContext.Provider>
    )
}