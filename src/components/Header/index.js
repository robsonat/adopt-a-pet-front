import Logo from "../Logo/index.js"
import AppMenu from "../Menu/index.js"
import AppIcons from "../Icons/index.js"
import styled from "styled-components"
import { Link } from "react-router-dom"

const HeaderContainer =  styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;  
`
function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo/>
            </Link>
            <AppMenu/>
            <AppIcons/>        
        </HeaderContainer>
    )
}

export default Header

