import Header from '../components/Header/index.js';
import Search from '../components/Search/index.js';
import Recents from '../components/Recents/index.js';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getAdopters } from '../services/AdoptersService.js';

const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-color: aliceblue;
      display: flex;
      flex-direction: column;
    }
`

function Adopters() {
  const [adopetrs, setAdopetrs] = useState([]);

  async function fetchAdoopters() {
    const adoptersDaAPI = await getAdopters()
    setAdopetrs(adoptersDaAPI);
  }

  useEffect(() => {
    fetchAdoopters()
  }, [])


  return (
    <AppContainer>
      {adopetrs.map( adopter => (
        <section>
          <p>{adopter.name} </p>
          <p>{adopter.sex}</p> 
        </section>
      ))}
    </AppContainer> 
  );
}

export default Adopters;
