import styled from "styled-components";

const DateContainer = styled.div`
    font-size: 0.9rem;
    color: white;
`

export default function Date({localitme}){
    return(
    <DateContainer>locate time: {localitme}</DateContainer>
    )
}