import avatar from '../../assets/avatar.svg'
import styled from 'styled-components';

const icons = [avatar];
const Icon = styled.li`
    display: flex;
`
const MenuIcons = styled.ul`
    margin-right: 40px;
    width: 25px;
`

function AppIcons() {
    return (
        <MenuIcons>
            { icons.map( (arg) => (<Icon><img src={arg} alt='imagem-de-avatar'></img></Icon>) 
                    ) }
        </MenuIcons>
        
    )}

export default AppIcons