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


// Missão Component
const MissaoComponent = () => {
    return (
      <StyledContainer>
        <h2>Missão</h2>
        <p>
          Conectar corações globalmente, promovendo a adoção responsável e proporcionando lares amorosos
          para animais de estimação abandonados. Nosso compromisso é facilitar a união perfeita entre tutores
          dedicados e pets encantadores, enquanto contribuímos para a redução da superpopulação e promovemos
          o bem-estar animal global.
        </p>
      </StyledContainer>
    );
  };


  export default MissaoComponent