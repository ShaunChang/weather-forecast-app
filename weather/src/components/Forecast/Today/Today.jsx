import styled from "styled-components"
import { useContext } from "react"
import {v4 as uuid} from "uuid"

import Card from "./Card/Card"
import { RootContext } from "../../../layouts"

const TodayContainer = styled.div`
    height: 100%; 
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-gap: 1rem;

    // max-width: 1200px;
    // margin: 0 auto;
    // display: grid;
    // grid-gap: 1rem;
    // grid-template-columns: repeat(3,minmax(300px,1fr))
`

export default function Today(){
    const {currentWeather}=useContext(RootContext)
    const twelveHoursForecastArray = currentWeather.twelveHoursForecastArray

    return(
        <TodayContainer>
            {
                twelveHoursForecastArray.map((forecast,index) => <Card key={uuid()} chance_of_rain={forecast.chance_of_rain} chance_of_snow={forecast.chance_of_snow} icon={forecast.condition.icon} temp_c={forecast.temp_c} time={forecast.time}/> )
            }

        </TodayContainer>
    )
}