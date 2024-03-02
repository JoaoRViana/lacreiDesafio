import styled from "styled-components";

const GenericImage = styled.div`
    width: 400px;
    height: 491px;
    background-image: url("/imgDesafio.jpg");
    background-size: cover; 
    background-position: center;
    background-color: rgb(232,100,29);
`

const RightContent = () => (
    <GenericImage />
)

export default RightContent;
