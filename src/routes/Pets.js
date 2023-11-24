import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getPets } from '../services/PetService.js';
import { useNavigate } from "react-router-dom"

const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-color: aliceblue;
      display: flex;
      flex-direction: column;
    }
`
function Pets() {
  const navigate = useNavigate()
  const [pets, setPets] = useState([]);

  async function fetchPets() {
    const petsDaAPI = await getPets()
    setPets(petsDaAPI);
  }

  useEffect(() => {
    fetchPets()
  }, [])


  const handleAddPet = () => {
    navigate("/pets/add")
  }

  return (
    <AppContainer>
      <button onClick={() => handleAddPet()}>Add Pet</button>
      {pets.map( pet => (
        <section>
          <p>Name: {pet.name} </p>
          <p>Specie: {pet.specie}</p> 
        </section>
      ))}
    </AppContainer> 
  );
}

export default Pets;
