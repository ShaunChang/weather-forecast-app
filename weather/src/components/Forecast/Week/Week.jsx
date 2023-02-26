import { useContext } from "react"
import {v4 as uuid} from "uuid";
import styled from "styled-components"
import Card from "./Card/Card"
import { RootContext } from "../../../layouts"

const WeekContainer = styled.div`
    height: 100%; 
    display: grid;
    grid-template-columns: repeat(10,1fr);
    grid-gap: 1.5rem;

    // max-width: 1200px;
    // margin: 0 auto;
    // display: grid;
    // grid-gap: 1rem;
    // grid-template-columns: repeat(3,minmax(300px,1fr))
`

export default function Week (){
    const {currentWeather}=useContext(RootContext)

    return(
        <WeekContainer>
        {
            currentWeather.forecastArray.map((forecast) => <Card key={uuid()} date={forecast.date} icon={forecast.day.condition.icon} avTemp={forecast.day.avgtemp_c}/> )
        }
        </WeekContainer>
    )
}