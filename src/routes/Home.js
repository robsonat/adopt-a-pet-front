import Header from '../components/Header/index.js';
import Search from '../components/Search/index.js';
import Recents from '../components/Recents/index.js';
import styled from 'styled-components';

const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-color: aliceblue;
      display: flex;
      flex-direction: column;
    }
`

function Home() {
  return (
    <AppContainer>
      <Search />
    </AppContainer> 
  );
}

export default Home;
