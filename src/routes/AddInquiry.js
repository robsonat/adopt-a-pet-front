import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { addPet, getPets } from '../services/PetService.js';
import { useNavigate } from 'react-router-dom';
import { getAdopters } from '../services/AdoptersService.js';
import { addInquiry } from '../services/InquiryService.js';

const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-color: aliceblue;
      display: flex;
      flex-direction: column;
    }
`
function AddInquiry() {
  const navigate = useNavigate()
  const [errors, setErrors] = useState(null)
  const [selectedPet, setSelectedPet] = useState(null);
  const [selectedAdopter, setSelectedAdopter] = useState(null);

  const [pets, setPets] = useState([]);
  const [adopters, setAdopters] = useState([]);



  async function fetchPets() {
    const petsDaAPI = await getPets()
    setPets(petsDaAPI);
    setSelectedPet(petsDaAPI[0]._id)
  }

  async function fetchAdopters() {
    const adoptersDaApi = await getAdopters()
    setAdopters(adoptersDaApi);
    setSelectedAdopter(adoptersDaApi[0]._id)
  }

  useEffect(() => {
    fetchPets()
    fetchAdopters()
  }, [])


  const handleAddInquiry = async () => {
    const response = await addInquiry({pet: selectedPet, adopter: selectedAdopter})
      if(response.sucess){
        navigate("/inquiries")
      }else{
        setErrors(prev => ({
          ...prev,
          server: {
            ...prev?.server,
            message: response.message
          }
        }))
      }
  }

  return (
    <AppContainer>
      <h3 style={{color: "red"}}>{errors?.server?.message}</h3>
        <label>
          Selecione o Pet 
          <select
            value={selectedPet}
            onChange={e => setSelectedPet(e.target.value)}
          >
            {pets.map( pet => (
              <option value={pet._id}>{pet.name}</option>
            ))}
          </select>
        </label>
        <hr />

        <label>
          Selecione o Adopter
          <select
            value={selectedAdopter}
            onChange={e => setSelectedAdopter(e.target.value)}
          >
            {adopters.map( adopter => (
              <option value={adopter._id}>{adopter.name}</option>
            ))}
          </select>
        </label>


       <button onClick={() => handleAddInquiry()}>Add Inquiry</button>
    </AppContainer> 
  );
}


export default AddInquiry;
