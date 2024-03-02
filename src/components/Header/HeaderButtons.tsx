import styled from "styled-components"

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 437px;
`

const NoBackgroundButton  = styled.button`
    color:green
`
const ButtonWithBackground = styled.button`
    background: green;
    color: white;
    padding: 3px 10px;
    border-radius: 0.5rem;
`
const HeaderButtons = ()=>(
    <ButtonsContainer>
        <NoBackgroundButton>Quem somos</NoBackgroundButton>
        <NoBackgroundButton>Ajuda</NoBackgroundButton>
        <ButtonWithBackground>Entrar</ButtonWithBackground>
    </ButtonsContainer>
)

export default HeaderButtons;