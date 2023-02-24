import styled from "styled-components";
import Items from "./components/Items/Items";

const EnvironmentContainer = styled.div`
    width: 40%;
    height: 30%;
    background-color: rgba(246,246,246,0.8);;
    border-radius: 14px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export default function Environment (){
    return(
        <EnvironmentContainer>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
        </EnvironmentContainer>
    )
}