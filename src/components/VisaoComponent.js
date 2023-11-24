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

// Visão Component
const VisaoComponent = () => {
    return (
      <StyledContainer>
        <h2>Visão</h2>
        <p>
          Ser a principal plataforma global de adoção de animais de estimação, reconhecida por conectar
          de maneira significativa e responsável pets a tutores em todo o mundo. Almejamos criar uma comunidade
          global unida pela paixão pelos animais, onde cada pet encontre um lar amoroso e cada tutor descubra a
          alegria única de compartilhar a vida com um companheiro leal e afetuoso.
        </p>
      </StyledContainer>
    );
  };
  

  export default VisaoComponent