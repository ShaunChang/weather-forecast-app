import styled from "styled-components";

const CardContainer = styled.div`
    background-color: green;
    height: 70%;
    border-radius: 999em;
    background-color: rgba(246,246,246,0.8);
    box-shadow: rgb(50 50 93 / 25%) 0px 30px 60px -12px, rgb(0 0 0 / 30%) 0px 18px 36px -18px;
`

export default function Card (){
    return(
        <CardContainer></CardContainer>
    )
}