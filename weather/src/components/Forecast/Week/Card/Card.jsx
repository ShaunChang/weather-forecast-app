import styled from "styled-components";

const CardContainer = styled.div`
    background-color: green;
    height: 70%;
    border-radius: 999em;
    background-color: rgba(246,246,246,0.8);
    box-shadow: rgb(50 50 93 / 25%) 0px 30px 60px -12px, rgb(0 0 0 / 30%) 0px 18px 36px -18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Img = styled.img`
    height: 30%;
`
const TemperatureContainer = styled.div`
    height: 28%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TemperatureNumber = styled.span`
    font-size: 3rem;
`

export default function Card ({date,icon,avTemp}){
    return(
        <CardContainer>
            <Img src={icon}/>
            {date}
            <TemperatureContainer><TemperatureNumber>{avTemp}</TemperatureNumber>°C</TemperatureContainer>
        </CardContainer>
    )
}