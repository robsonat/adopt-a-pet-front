import styled from "styled-components"
import Input from '../Input/index.js'
import { useEffect, useState } from "react"
import { getPets } from "../../services/PetService.js"


const SearchContainer = styled.section`
background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
color: #FFF;
text-align: center;
padding: 85px 0;
height: 470px;
width: 100%;
`
const Title = styled.h2`
color: #FFF;
font-size: 36px;
text-align: center;
width: 100%;
`
const SubTitle = styled.h3`
font-size: 16px;
font-weight: 500;
margin-bottom: 40px;


`
const Resultado = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
cursor: pointer;

p {
    width: 200px;
}

img {
    width: 100px;
}

&:hover {
    border: 1px solid white;
}
`

function Search() {
    const [textInputed, setTextInputed] = useState([]);
    const [ pets, setPets ] = useState([]);

    useEffect(() => {
        fetchPets();
    }, []);

    async function fetchPets() {
        const petsDaAPI = await getPets();
        setPets(petsDaAPI);
    }

    return(
           <SearchContainer>
                <Title>Aqui você pode encontrar seu melhor amigo</Title>
                <SubTitle>Pesquise por "DOG" ou "CAT" para encontrar </SubTitle>
                <Input
                placeholder="Input any specie here"
                onInputCapture={ event => {
                    const param = event.target.value;
                    const result = pets.filter( obj => obj.specie.includes(param));
                    setTextInputed(result);
                    } }
                />
                { textInputed.map( obj => (
                        <Resultado>                         
                            <h3>{obj.name}</h3>
                            <p>{obj.specie}</p>
                            <p>{obj.sex}</p>
                        </Resultado>                
                        )
                 ) }              
            </SearchContainer>        
    )
}

export default Search