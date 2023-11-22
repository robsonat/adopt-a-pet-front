import Logo from "../Logo"
import AppMenu from "../Menu"
import AppIcons from "../Icons"
import styled from "styled-components"

const HeaderContainer =  styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;  
`
function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <AppMenu/>
            <AppIcons/>        
        </HeaderContainer>
    )
}

export default Header

