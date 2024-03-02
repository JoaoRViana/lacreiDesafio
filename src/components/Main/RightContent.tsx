import styled from "styled-components";

const GenericImage = styled.div`
    width: 400px;
    height: 491px;
    background-image: url("/assets/imgDesafio.jpg");
    background-size: cover; 
    background-position: center;
`

const RightContent = () => (
    <GenericImage />
)

export default RightContent;
