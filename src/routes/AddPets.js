import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { addPet, getPets } from '../services/PetService.js';
import { useNavigate } from 'react-router-dom';

const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-color: aliceblue;
      display: flex;
      flex-direction: column;
    }
`
function AddPets() {
  const navigate = useNavigate()
  const [errors, setErrors] = useState(null)
  const [name, setName] = useState(null);
  const [specie, setSpecie] = useState("DOG");
  const [sex, setSex] = useState("FEMALE");

  const validate = () => {
    let hasErrors = false
    if(!name){
      setErrors(prev => ({
        ...prev,
        fields: {
          ...prev?.fields,
          name: {
            message: "O nome é obrigatório"
          }
        }
      }))
      hasErrors = true
    }

    return hasErrors
  }

  const handleAddPet = async () => {
    const hasErrors = validate()
    if(!hasErrors){
      const response = await addPet({name, specie, sex})
      if(response.sucess){
        navigate("/pets")
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
  }

  const sexRadios = [
    {
      value: "MALE",
      onChange: e => setSex(e),
      owner: sex
    },
    {
      value: "FEMALE",
      onChange: e => setSex(e),
      owner: sex
    }
  ]

  const specieRadios = [
    {
      value: "DOG",
      onChange: e => setSpecie(e),
      owner: specie
    },
    {
      value: "CAT",
      onChange: e => setSpecie(e),
      owner: specie
    }
  ]

  return (
    <AppContainer>
      <h3 style={{color: "red"}}>{errors?.server?.message}</h3>

      <label>
        Name: <input onChange={e => {
          setName(e.target.value)
          setErrors(prev => ({
            name: undefined
          }))
        }}></input>
       </label>
       <span style={{color: "red", fontSize:"14px"}}>{errors?.fields?.name?.message}</span>
      
       <RadioInputs label="Sex" radios={sexRadios}></RadioInputs>
       <RadioInputs label="Specie" radios={specieRadios}></RadioInputs>

       <button onClick={() => handleAddPet()}>Add Pet</button>
    </AppContainer> 
  );
}


const RadioInputs = (props) => {
  return (
    <label>
      {props.label}
      <br/>
      {props.radios.map(radio => (
        <>
          <label>
            {radio.value}
            <label>{props.value} <input type="radio" name={props.label} key= {props.value} checked={props.owner === props.value} value={props.value} onChange={e => props.onChange(e.target.value)}></input></label><br/>
          </label>
        </>
      ))}
    </label>
  )
}


export default AddPets;
