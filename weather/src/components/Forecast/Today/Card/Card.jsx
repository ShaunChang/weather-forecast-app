import styled from "styled-components";
import moment from "moment"
import rainIcon from "../images/rain.svg"
import snowIcon from "../images/snow.svg"


const CardContainer = styled.div`
    background-color: green;
    height: 70%;
    border-radius: 13px;
    background-color: rgba(246,246,246,0.8);
    box-shadow: rgb(0 50 93 / 25%) 0px 30px 60px -12px, rgb(0 0 0 / 30%) 0px 1px 1px -18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`
const Img = styled.img`
    width: 100%;
`
const SmallImg = styled.img`
    width: 30%;
    margin-right: 1rem;
`
const TemperatureContainer = styled.div`
    height: 18%;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TemperatureNumber = styled.span`
    font-size: 2rem;
`

export default function Card ({chance_of_rain,chance_of_snow,icon,temp_c,time}){
    let timeObj = moment(time).format('HH:mm');
    return(
        <CardContainer>
            <TemperatureContainer>{timeObj}</TemperatureContainer>
            <Img src={icon}/>
            <TemperatureContainer><TemperatureNumber>{temp_c}</TemperatureNumber>°C</TemperatureContainer>
            <TemperatureContainer><SmallImg src={rainIcon}/> {` ${chance_of_rain}%`}</TemperatureContainer>
            <TemperatureContainer><SmallImg src={snowIcon}/> {` ${chance_of_snow}%`}</TemperatureContainer>
        </CardContainer>
    )
}