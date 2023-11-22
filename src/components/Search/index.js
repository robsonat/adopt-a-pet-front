import styled from "styled-components"
import Input from '../Input'
import { useState } from "react"
import { pets }  from './dadosPesquisa'

const SearchContainer = styled.section`
text-align: center;
padding 85px 0;
height: 270px;
width: 100%;
margin-bottom: 200px;
`

const Title = styled.h2`
color: #040034;
text-align: center;
font-size: 32px;
`

const SubTitle = styled.h3`
color: #040034;
text-align: center;
width: 100%


`
const Resultado = styled.div`
display: flex;

justify-content: center;
align-items: center;
margin-bottom: 20px;
cursor: pointer;
margin: 0 auto;
width: 700px;
p {
    width: 200px;
}
img {
    width: 100px;
}
&:hover {
    border: 1px solid red;
}
`

function Search() {
    const [textInputed, setTextInputed] = useState([]);

    return(
           <SearchContainer>
                <Title>Find your best friend</Title>
                <SubTitle>You can search by specie</SubTitle>
                <Input
                onBlur={(event) => {
                    const param = event.target.value;
                    const result = pets.filter( obj => obj.specie.includes(param));
                    setTextInputed(result);
                    } }
                />
                { textInputed.map( obj => {
                    return (
                        <Resultado>                         
                            <h3>{obj.nome}</h3>
                            <p>{obj.specie}</p>
                            <img src={obj.src}/>
                        </Resultado>                
                        )
                } ) }              
            </SearchContainer>        
    )
}

export default Search