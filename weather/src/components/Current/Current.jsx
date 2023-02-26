import styled from "styled-components";
import { useContext } from "react";

import jiguang from "./images/jiguang.jpg"
import searchIcon from "./images/search.svg"
import Date from "./components/Date/Date";
import Location from "./components/Location/Location";
import Environment from "./components/Environment/Environment";
import Weather from "./components/Weather/Weather"
import { RootContext } from "../../layouts";



const CurrentContainer = styled.div`
    width: 90%;
    height: 40%;
    box-sizing: border-box;
    margin: 1rem auto;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    border-radius: 12px;
    background-size: 100% 100%;
    background-image: url(${jiguang})

    // @media(min-width: 400px){
    //     width: 90%;
    // }
`

const LeftContainer = styled.div`
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 2rem;
`

const RightContainer = styled.div` 
    width: 50%;
    height: 100%;
    border-radius: 12px;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
`

const SearchContainer = styled.div`
    position: absolute;
    width: 20%;
    height: 5%;
    margin-top: 1rem;
    display: flex;
    flex-direction: row-reverse;
`
const Search = styled.input`
    width: 100%;
    height: 100%;
    border-radius: 999em;
    background-color: rgba(246,246,246,0.8);
    border: none;
`
const Img = styled.img`
    position: absolute;
    width: 10%;
    height: 100%;
    margin-right: 1rem;
`

export default function Current(){
    const {currentWeather,changeSearchValue,changeLocation} = useContext(RootContext)

    return(
    <CurrentContainer>
        <LeftContainer>
            <Location location={currentWeather.location}/>
            <Date localitme={currentWeather.localitme}/>
            <Environment pm2_5={currentWeather.pm2_5} humidity={currentWeather.humidity} uv={currentWeather.uv} wind_kph={currentWeather.wind_kph}/>
        </LeftContainer>
        <RightContainer>
            <Weather temperature={currentWeather.temperature} icon={currentWeather.icon} text={currentWeather.text}/>
        </RightContainer>
        <SearchContainer>
            <Search placeholder=" search location...." onChange={(e)=>{changeSearchValue(e)}}/>
            <Img src={searchIcon} alt="search" onClick={changeLocation}/>
        </SearchContainer>
    </CurrentContainer>

    )
}