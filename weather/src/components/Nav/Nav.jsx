import styled from "styled-components"
import {Link} from "react-router-dom"
import NavStyle from "./Nav.module.css"

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
            <Link className={NavStyle.navItemContainer} to="/today">Today</Link>
            &nbsp;&nbsp;&nbsp;
            <Link className={NavStyle.navItemContainer} to="/week">Week</Link>
        </NavContainer>
    )
}