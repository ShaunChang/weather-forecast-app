import styled from "styled-components"
import {Outlet} from "react-router-dom"
import Current from "../components/Current/Current"
import Nav from "../components/Nav/Nav"

const AppContainer = styled.div`
    height: 100vh;
    box-sizing: border-box;
`
const ForecastContainer = styled.div`
    width: 90%;
    height: 60%;
    margin: 0 auto;
`

export default function Root (){
    return(
        <AppContainer>
            <Current/>
            <ForecastContainer>
                <Nav/>
                <Outlet/>
            </ForecastContainer>
        </AppContainer>
    )
}