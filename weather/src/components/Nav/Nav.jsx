import styled from "styled-components"
import {NavLink} from "react-router-dom"

const NavContainer = styled.div`
    width: 100%;
    height: 10%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`

export default function Nav(){
    return(
        <NavContainer>
            <NavLink className="navItemContainer" to="/today">today</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink className="navItemContainer" to="/week">week</NavLink>
        </NavContainer>
    )
}