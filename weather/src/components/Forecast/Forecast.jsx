import styled from "styled-components";
import Nav from "../Nav/Nav";
import ForecastList from "./ForecastList/ForecastList";

const ForecastContainer = styled.div`
    width: 90%;
    height: 60%;
    margin: 0 auto;
`

export default function Forecast(){
    return(
        <ForecastContainer>
            <Nav/>
            <ForecastList/>
        </ForecastContainer>
    )
}