import styled from "styled-components";
import { Title } from "../Title/index.js";

const CardRecomendationContainer = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;
`

const SubTitle = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

export const Button = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
        cursor: pointer;
    }
`

const Desc = styled.p`
    max-width: 300px;
`

const ImgPet = styled.img`
    width: 150px;
`

function CardRecomendation({title, subTitle, desc, img}) {
    return (
        <CardRecomendationContainer>
            <div>
                <Title
                cor="red"
                tamanhoFont="16px"
                alinhamento="left"
                >{title}</Title>
                <h4>{subTitle}</h4>
                <Desc>{desc}</Desc>
            </div>
            <div>
                <ImgPet src={img} alt="..."/>
                <Button>Meet me</Button>    
            </div>
        </CardRecomendationContainer>
    )
}

export default CardRecomendation    