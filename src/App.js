import Header from './components/Header';
import Search from './components/Search';
import styled from 'styled-components';
import Recents from './components/Recents';

const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-color: aliceblue;
      display: flex;
      flex-direction: column;

    }
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <Recents />
    </AppContainer> 
  );
}

export default App;
