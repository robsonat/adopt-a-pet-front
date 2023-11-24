import { pets} from "./dados.js"
import styled from "styled-components";
import { Title } from "../Title/index.js";
import CardRecomendation from "../CardRecomendation/index.js";

const RecentsContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const RecentPets = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function Recents () {
    return (
        <RecentsContainer>
            <Title
            cor="#EB9B00"
            tamanhoFonte="36px"
            > 
            Last pets added
            </Title>
            <RecentPets>
                {pets.map ( pet => (
                    <img src={pet.src} alt="..."/>
                ))}
            </RecentPets>
            <CardRecomendation
                title={"Venha me conhecer"}
                subTitle={"Meu nome é ..."}
                desc={"Essas são as minhas carac"}
                img={"https://picsum.photos/id/237/200/300"}
            />
        </RecentsContainer>
    );
}

export default Recents