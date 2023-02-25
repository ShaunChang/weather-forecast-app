import styled from "styled-components";

const LocationContainer = styled.div`
    font-size: 1.7rem;
    font-weight: 700;
    color: white;
`

export default function Location ({location}){
    return(
        <LocationContainer> {location} </LocationContainer>
    )
}