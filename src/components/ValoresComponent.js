import styled from "styled-components"
const StyledContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  h2 {
    color: #333;
  }

  p {
    color: #555;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    color: #555;

    li::before {
      content: '•';
      margin-right: 8px;
    }
  }
`;


// Valores Component
const ValoresComponent = () => {
    return (
      <StyledContainer>
        <h2>Valores</h2>
        <ul>
          <li>Empatia Animal</li>
          <li>Transparência e Integridade</li>
          <li>Inovação com Propósito</li>
          <li>Compaixão Global</li>
          <li>Responsabilidade Social e Ambiental</li>
        </ul>
      </StyledContainer>
    );
  };


  export default ValoresComponent