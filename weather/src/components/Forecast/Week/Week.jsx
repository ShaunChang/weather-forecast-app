import styled from "styled-components"
import Card from "./Card/Card"

const TodayContainer = styled.div`
    height: 100%; 
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-gap: 1.5rem;

    // max-width: 1200px;
    // margin: 0 auto;
    // display: grid;
    // grid-gap: 1rem;
    // grid-template-columns: repeat(3,minmax(300px,1fr))
`

export default function Week (){
    return(
        <TodayContainer>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </TodayContainer>
    )
}