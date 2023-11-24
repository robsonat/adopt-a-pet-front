import Search from '../components/Search/index.js';
import Recents from '../components/Recents/index.js';
import styled from 'styled-components';
import MissaoComponent from '../components/MissaoComponent.js';
import ProprostaValorComponent from '../components/PropostaValorComponent.js'
import ValoresComponent from '../components/ValoresComponent.js'
import VisaoComponent from '../components/VisaoComponent.js'

const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-color: aliceblue;
      display: flex;
      flex-direction: column;

      gap 50px;
    }
`

function Home() {
  return (
    <AppContainer>
        <AppContainer>
          <MissaoComponent />
          <ProprostaValorComponent />
          <ValoresComponent />
          <VisaoComponent />
        </AppContainer> 
        <AppContainer>
          <Search />
          <Recents />
        </AppContainer>
    </AppContainer>
  );
}

export default Home;
