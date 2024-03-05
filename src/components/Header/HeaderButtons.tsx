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
    font-size:18px;
    line-height:27px;
    font-weight: 700;
`
const ButtonWithBackground = styled.button`
    background: #018762;
    color: white;
    padding:0px 32px;
    heigth: 48px;
    border-radius: 0.5rem;
    Padding: 10px 32px;
    font-size:18px;
    line-height:27px;
    font-weight: 700;
    box-shadow: 0px 5px 10px 0px #0000004D;

`
const HeaderButtons = ()=>(
    <ButtonsContainer>
        <NoBackgroundButton data-testid="header-QuemSomos-bttn">Quem somos</NoBackgroundButton>
        <NoBackgroundButton data-testid="header-Ajuda-bttn">Ajuda</NoBackgroundButton>
        <ButtonWithBackground data-testid="header-Entrar-bttn">Entrar</ButtonWithBackground>
    </ButtonsContainer>
)

export default HeaderButtons;