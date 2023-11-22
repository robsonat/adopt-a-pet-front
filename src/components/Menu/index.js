import styled from 'styled-components';

const menuOptions = ['Pets', 'Adoptions', 'Adopters'];

const MenuContainer = styled.li`
font-size: 16px;
display: flex;
justify-content: space-evenly;
align-items: center;
text-align: center;
height: 100%;
padding: 0 5px;
cursor: pointer;
min-width: 768px;
`
const Options = styled.ul`
display: flex;
`
function AppMenu() {
    return ( 
        <MenuContainer>
            { menuOptions.map( (text) => (<Options><p>{text}</p></Options>)) }
        </MenuContainer>
        )
}

export default AppMenu;