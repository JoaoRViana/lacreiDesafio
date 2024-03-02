import styled from "styled-components"

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 437px;
`

const NoBackgroundButton  = styled.button`
    color: #018762;
    heigth: 48px;
`
const ButtonWithBackground = styled.button`
    background: #018762;
    color: white;
    padding:0px 32px;
    heigth: 48px;
    border-radius: 0.5rem;
    Padding: 10px 32px;
`
const HeaderButtons = ()=>(
    <ButtonsContainer>
        <NoBackgroundButton>Quem somos</NoBackgroundButton>
        <NoBackgroundButton>Ajuda</NoBackgroundButton>
        <ButtonWithBackground>Entrar</ButtonWithBackground>
    </ButtonsContainer>
)

export default HeaderButtons;