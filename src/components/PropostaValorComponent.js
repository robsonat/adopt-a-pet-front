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

// Proposta de Valor Component
const PropostaValorComponent = () => {
    return (
      <StyledContainer>
        <h2>Proposta de Valor</h2>
        <p>
          Facilitamos a adoção de animais, conectando tutores a pets em abrigos ao redor do mundo.
          Oferecemos uma experiência envolvente, perfil detalhado dos pets e suporte pós-adoção.
        </p>
      </StyledContainer>
    );
  };
  
  export default PropostaValorComponent