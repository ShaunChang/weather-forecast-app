import styled from "styled-components";
import jiguang from "./images/jiguang.jpg"
import Date from "./components/Date/Date";
import Location from "./components/Location/Location";
import Environment from "./components/Environment/Environment";
import Weather from "./components/Weather/Weather"


const CurrentContainer = styled.div`
    width: 90%;
    height: 40%;
    box-sizing: border-box;
    margin: 1rem auto;
    padding-top: 2rem;
    display: flex;
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
`

const RightContainer = styled.div` 
    width: 50%;
    height: 100%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    padding-right: 5rem;
`

export default function Current(){
    return(
    <CurrentContainer>
        <LeftContainer>
            <Location/>
            <Date/>
            <Environment/>
        </LeftContainer>
        <RightContainer>
            <Weather/>
        </RightContainer>
    </CurrentContainer>
    )
}