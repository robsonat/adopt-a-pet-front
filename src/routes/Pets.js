import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getPets } from '../services/PetService.js';

const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-color: aliceblue;
      display: flex;
      flex-direction: column;
    }
`
function Pets() {
  const [pets, setPets] = useState([]);

  async function fetchPets() {
    const petsDaAPI = await getPets()
    setPets(petsDaAPI);
  }

  useEffect(() => {
    fetchPets()
  }, [])


  return (
    <AppContainer>
      {pets.map( pet => (
        <section>
          <p>{pet.name} </p>
          <p>{pet.specie}</p> 
        </section>
      ))}
    </AppContainer> 
  );
}

export default Pets;
