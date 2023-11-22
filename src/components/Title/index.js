import styled from "styled-components";

export const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: white;
    color: ${props => props.cor || '#040034'};
    text-align: ${props => props.alinhamento || 'center'};
    font-size: ${props => props.fSize || '16px'};
    margin: 0;
`