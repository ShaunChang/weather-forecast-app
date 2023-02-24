import styled from "styled-components";
import wind from "./images/wind.jpg"

const ItemsContainer =  styled.div`
    width: 40%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
`
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 4px;
    background: rgba(89,96,198,1);
`

const Image = styled.img`
    width: 60%;
    height: 60%;
`

const EnvironmentValueContainer = styled.div`
    width: 70%;
    height: 100%;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`


export default function Items (){
    return(
        <ItemsContainer>
            <ImageContainer><Image src={wind}/></ImageContainer>
            <EnvironmentValueContainer>14km/h</EnvironmentValueContainer>
        </ItemsContainer>
    )
}