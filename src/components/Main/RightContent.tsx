import styled from "styled-components";

const ImageContainer = styled.div`
    width: 400px;
    max-height: 491px;
    border-radius: 8px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`


const GenericImage = () => (
    <ImageContainer data-testid="main-img">
        <Image src="/assets/imgDesafio.jpg" alt="médica e paciente" />
    </ImageContainer>
)

export default GenericImage;
