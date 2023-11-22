import logo from '../../assets/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #040034;
  align-items: center; 
`;

const LogoImage = styled.img`
  margin-right: 8px;
`

function Logo() {
    return (
      <LogoContainer>
          
          <LogoImage            
            src={logo} 
            alt='logotipo-Adopt-a-pet'
          />
          
          <p> <strong>Adopt</strong> a pet</p>   
      </LogoContainer>
    )
}


export default Logo;