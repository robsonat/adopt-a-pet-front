import { pets } from './recentItems'
import styled from 'styled-components'
import { Title } from '../Title'
import CardRecomenda from '../Card'

const RecentsContainer = styled.section`
padding-bottom: 20px;
display: flex;
flex-direction: column; 
`

const NewPets = styled.div`
margin-top: 30px;
display: flex;
width: 100%;
justify-content: center;
cursor: pointer;
gap: 2px;
`

function Recents() {
    return(
        <RecentsContainer>
                <Title 
                cor='orange' 
                fSize ="48px" 
                >Last Pets availables
            </Title>

            <Title >Last Pets availables</Title>
            
            <NewPets>
                {pets.map( obj =>( <img src={obj.src} /> ))}
            </NewPets>   
            {/* <Card
                title="Teste"
                subTitle="kkkk"
                description="hahusjhiaheuheauiheauiheauie"
                img="https://picsum.photos/200/300?grayscale"
            />  */}

           
        </RecentsContainer>      
    )
}

export default Recents