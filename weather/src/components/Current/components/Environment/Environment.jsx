import styled from "styled-components";
import Items from "./components/Items/Items";

const EnvironmentContainer = styled.div`
    width: 45%;
    height: 30%;
    background-color: rgba(246,246,246,0.8);
    border-radius: 14px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export default function Environment ({pm2_5, humidity, uv, wind_kph}){
    return(
        <EnvironmentContainer>
            <Items name={'pm2.5'} value={pm2_5}/>
            <Items name={'humidity'} value={humidity}/>
            <Items name={'uv'} value={uv}/>
            <Items name={'wind_kph'} value={wind_kph}/>
        </EnvironmentContainer>
    )
}