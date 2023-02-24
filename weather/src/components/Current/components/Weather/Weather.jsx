import styled from "styled-components";
import weather from "./images/weather.svg"

const WeatherContainer = styled.div`
    width: 45%;
    height: 80%;
    background: linear-gradient(167deg, rgba(121,126,205,1) 0%, rgba(89,96,198,1) 35%, rgba(55,49,154,1) 100%);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
`

const IconContainer = styled.div`
    margin-top: 1rem;
    width: 50%;
    height: 65%;
`

const Icon = styled.img`
    width: 100%;
    height: 100%;
`

const TemperatureContainer = styled.div`
    height: 35%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const TemperatureNumber = styled.span`
    font-size: 3rem;
`


export default function Weather(){
    return(
        <WeatherContainer>
            <IconContainer>
                <Icon src={weather}/>
            </IconContainer>
            <TemperatureContainer><TemperatureNumber>23</TemperatureNumber>°C</TemperatureContainer>
        </WeatherContainer>
    )
}